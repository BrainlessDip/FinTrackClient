import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";

const FinancialSummary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((txn) => txn.type === "income")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const totalExpense = transactions
    .filter((txn) => txn.type === "expense")
    .reduce((acc, txn) => acc + txn.amount, 0);

  const netBalance = totalIncome - totalExpense;

  const categoryIncomeTotals = Object.values(
    transactions.reduce((acc, txn) => {
      if (txn.type === "income") {
        if (!acc[txn.category])
          acc[txn.category] = { name: txn.category, value: 0 };
        acc[txn.category].value += txn.amount;
      }
      return acc;
    }, {})
  );
  const categoryExpenseTotals = Object.values(
    transactions.reduce((acc, txn) => {
      if (txn.type === "expense") {
        if (!acc[txn.category])
          acc[txn.category] = { name: txn.category, value: 0 };
        acc[txn.category].value += txn.amount;
      }
      return acc;
    }, {})
  );

  const incomeColors = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5"];
  const expenseColors = ["#ef4444", "#f87171", "#fca5a5", "#fecaca", "#fee2e2"];

  return (
    <div className="flex flex-col gap-10 mt-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl border-l-4 border-success">
          <div className="card-body p-6 flex-row items-center gap-4">
            <div className="p-3 bg-success/20 rounded-full text-success">
              <FaArrowUp className="text-2xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">Total Income</p>
              <h3 className="text-2xl font-bold text-success">${totalIncome.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-l-4 border-error">
          <div className="card-body p-6 flex-row items-center gap-4">
            <div className="p-3 bg-error/20 rounded-full text-error">
              <FaArrowDown className="text-2xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">Total Expenses</p>
              <h3 className="text-2xl font-bold text-error">${totalExpense.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-l-4 border-primary">
          <div className="card-body p-6 flex-row items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-full text-primary">
              <FaWallet className="text-2xl" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase">Net Balance</p>
              <h3 className={`text-2xl font-bold ${netBalance >= 0 ? "text-primary" : "text-error"}`}>
                ${netBalance.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold mb-6 justify-center">Income by Category</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryIncomeTotals}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryIncomeTotals.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={incomeColors[index % incomeColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold mb-6 justify-center">Expense by Category</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryExpenseTotals}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryExpenseTotals.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={expenseColors[index % expenseColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
