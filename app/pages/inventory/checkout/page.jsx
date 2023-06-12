'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const selectedProducts = useSelector((state) => state.products.selectedProducts);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const calculateSubtotal = (product) => {
    const quantity = quantities[product._id] || 0;
    return product.sellingPrice * quantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedProducts.forEach((product) => {
      const quantity = quantities[product._id] || 0;
      totalPrice += product.sellingPrice * quantity;
    });
    return totalPrice;
  };

  return (
    <div className="p-10 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-5">Checkout</h1>

      <div className="w-full max-w-[1000px] bg-white rounded-lg p-7">
        {selectedProducts.length === 0 ? (
          <p>No products selected</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-1 text-left">Product Name</th>
                <th className="py-2 px-1 text-left">Quantity Available</th>
                <th className="py-2 px-1 text-left">Selling Price</th>
                <th className="py-2 px-1 text-left">Quantity to Buy</th>
                <th className="py-2 px-1 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-100 text-left">
                  <td className="py-2 px-1">{product.productName}</td>
                  <td className="py-2 px-1">{product.quantityAvailable}</td>
                  <td className="py-2 px-1">{product.sellingPrice}</td>
                  <td className="py-2 px-1">
                    <input
                      type="number"
                      min="1"
                      max={product.quantityAvailable}
                      className="w-16 py-1 px-2 border border-gray-300 rounded"
                      onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                    />
                  </td>
                  <td className="py-2 px-1">{calculateSubtotal(product)}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 px-1" colSpan={3}></td>
                <td className="py-2 px-1 text-right font-bold">Total Price:</td>
                <td className="py-2 px-1 font-bold">{calculateTotalPrice()}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Checkout;
