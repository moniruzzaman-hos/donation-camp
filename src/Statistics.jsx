import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { getStoredDonations } from "./uitilities/localStorageSetup";
function Statistics() {
  const donations = useLoaderData();
  let totalDonation = { name: "totalDonate", value: 0 };
  if (donations.length > 0) {
    donations.map((item) => {
      totalDonation.value += item?.price;
    });
  }
  const dotatedData = getStoredDonations();
  let totalDonated = { name: "totalDonated", value: 0 };
  if (dotatedData.length > 0) {
    dotatedData.map((item) => {
      totalDonated.value += item?.price;
    });
  }

  const data = [
    { name: "Total Donation", value: totalDonation.value },
    { name: "Total Donated", value: totalDonated.value },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="flex justify-center">
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Statistics;
