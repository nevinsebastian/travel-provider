import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const orders = [
    { id: 1, activityName: 'Hiking Tour', customerName: 'John Doe', contactNumber: '123-456-7890', status: 'Pending' },
    { id: 2, activityName: 'Kayaking Adventure', customerName: 'Alice Smith', contactNumber: '987-654-3210', status: 'Completed' },
    // Add more orders as needed
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Activity Name</th>
            <th>Customer Name</th>
            <th>Contact Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.activityName}</td>
              <td>{order.customerName}</td>
              <td>{order.contactNumber}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
