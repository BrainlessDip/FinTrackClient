import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const TransactionDetails = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await api.get(`/transaction/${id}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setData([]);
        setLoading(false);
      }
    };
    getDetails();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="bg-base-300 h-screen px-4">
      <h1 className="mx-auto text-3xl sm:text-4xl pt-5 border-b-2 border-blue-500 w-fit">
        Transaction Details
      </h1>
      <div className="max-w-sm mx-auto bg-white dark:bg-[#1d232a] rounded-2xl shadow-lg p-6 text-gray-800 dark:text-gray-200 mt-5">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {data.email}
          </p>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 my-3"></div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Type</span>
            <span className="capitalize">{data.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Category</span>
            <span className="capitalize">{data.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Amount</span>
            <span
              className={`${
                data.type === "income" ? "text-green-500" : "text-red-500"
              } font-semibold`}
            >
              ${data.amount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date</span>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          ID: {data._id}
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          Category Total: ${data.category_total}
        </div>
      </div>
      <div className="max-w-sm mx-auto bg-white dark:bg-[#1d232a] rounded-2xl shadow-lg p-6 text-gray-800 dark:text-gray-200 mt-5">
        <p className="text-center font-bold">Description</p>
        <span>{data.description}</span>
      </div>
    </div>
  );
};

export default TransactionDetails;
