// Dashboard.js
/*
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const Dashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Bar Chart Example',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        type: 'category',
      },
    },
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Line Chart *//*}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
        <div className="border p-4 rounded-md bg-white shadow-md">
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div>

      {/* Bar Chart *//*}
      <div>
        <h2 className="text-xl font-semibold mb-4">Bar Chart Example</h2>
        <div className="border p-4 rounded-md bg-white shadow-md">
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
*/