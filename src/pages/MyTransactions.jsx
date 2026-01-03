import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TransactionCard from "../components/TransactionCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SkeletonCard from "../components/SkeletonCard";

const MyTransactions = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useAuth();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await api.get("/my-transactions");
        setOriginalData(res.data);
        setLoading(false);
      } catch (err) {
        setOriginalData([]);
        setLoading(false);
      }
    };
    getTransactions();
  }, [api]);

  const uniqueCategories = [
    ...new Set(originalData.map((item) => item.category)),
  ].sort();

  useEffect(() => {
    let result = [...originalData];

    if (filterType) {
      result = result.filter((item) => item.type === filterType);
    }

    if (filterCategory) {
      result = result.filter((item) => item.category === filterCategory);
    }

    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.description.toLowerCase().includes(lowerSearch) ||
          item.category.toLowerCase().includes(lowerSearch)
      );
    }

    if (sort === "date") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "amount") {
      result.sort((a, b) => Number(b.amount) - Number(a.amount));
    } else {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedResult = result.slice(startIndex, startIndex + itemsPerPage);

    setData(paginatedResult);
  }, [originalData, search, filterType, filterCategory, sort, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterType, filterCategory, sort]);

  const deleteTransaction = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      theme: theme ? "dark" : "light",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const res = await toast.promise(api.delete(`/transaction/${id}`), {
      pending: "Deleting your transaction...",
      success: {
        render({ data }) {
          return data?.data?.message;
        },
      },
      error: {
        render({ data }) {
          return (
            data?.response?.data?.message ||
            "Failed to delete transaction. Please try again!"
          );
        },
      },
    });
    if (res.status === 200) {
      setOriginalData((prev) => prev.filter((t) => t._id !== id));
    }
  };

  const totalPages = Math.ceil(
    originalData
      .filter((item) => !filterType || item.type === filterType)
      .filter((item) => !filterCategory || item.category === filterCategory)
      .filter(
        (item) =>
          !search ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
      ).length / itemsPerPage
  );

  return (
    <div className="bg-base-300 min-h-screen pb-10">
      <div className="flex flex-col items-center gap-6 pt-8 pb-4 px-4">
        <h1 className="text-4xl font-bold border-b-4 border-primary pb-2 text-base-content">
          My Transactions
        </h1>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl bg-base-100 p-4 rounded-xl shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered  w-full md:w-56"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered  w-full md:w-36"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            className="select select-bordered w-full md:w-36"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered w-full md:w-40"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="" disabled>
              Sort by...
            </option>
            <option value="date">Date (Newest)</option>
            <option value="amount">Amount (High to Low)</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7 max-w-7xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7">
            {data.length > 0 ? (
              data.map((transaction) => (
                <TransactionCard
                  transaction={transaction}
                  key={transaction._id}
                  deleteTransaction={() => {
                    deleteTransaction(transaction._id);
                  }}
                />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-base-content/50 gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xl">No transactions found.</span>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="join flex justify-center mt-8">
              <button
                className="join-item btn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                «
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  className={`join-item btn ${
                    currentPage === idx + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="join-item btn"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyTransactions;
