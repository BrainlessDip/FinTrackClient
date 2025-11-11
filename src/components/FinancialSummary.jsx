import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinancialSummary = ({ transactions }) => {
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

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#8dd1e1",
    "#d0ed57",
    "#a4de6c",
  ];

  return (
    <div className="flex flex-col items-center gap-12 mt-10">
      <div className="w-full max-w-3xl h-80">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Income by Category
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryIncomeTotals}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryIncomeTotals.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full max-w-3xl h-80">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Expense by Category
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryExpenseTotals}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryExpenseTotals.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialSummary;
