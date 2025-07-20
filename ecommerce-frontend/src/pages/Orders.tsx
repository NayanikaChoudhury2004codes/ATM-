import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Orders: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const orderPlaced = location.state?.orderPlaced;
  const orderTotal = location.state?.orderTotal;

  useEffect(() => {
    // Clear the state after showing the success message
    if (orderPlaced) {
      window.history.replaceState({}, document.title);
    }
  }, [orderPlaced]);

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please log in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>

      {orderPlaced && (
        <div className="bg-green-50 border border-green-200 rounded-md p-6">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="text-lg font-medium text-green-800">Order Placed Successfully!</h3>
              <p className="text-green-700">
                Your order total of ${orderTotal} has been confirmed. You will receive an email confirmation shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {orderPlaced ? 'Your first order!' : 'No orders yet'}
          </h3>
          <p className="text-gray-500 mb-6">
            {orderPlaced 
              ? 'Congratulations on your first purchase! More orders will appear here as you shop.'
              : 'When you place orders, they will appear here.'
            }
          </p>
          {!orderPlaced && (
            <a href="/products" className="btn-primary">
              Start Shopping
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;