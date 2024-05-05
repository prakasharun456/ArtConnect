import React from 'react';

const dummyOrders = [
  { id: 1, customerName: "John Doe", productName: "Product 1", status: "Pending" },
  { id: 2, customerName: "Jane Smith", productName: "Product 2", status: "Shipped" },
  { id: 3, customerName: "Alice Johnson", productName: "Product 3", status: "Delivered" }
];

const ManageOrders = () => {
  return (
    <div className="manage-orders-container">
      <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map(order => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customerName}</td>
                <td className="border px-4 py-2">{order.productName}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
