import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';


function ProductCart({ product }) {
  const { addItem } = useCart();

  return (
    <div className="border-0 rounded-2xl bg-white shadow-md shadow-white overflow-hidden">
        <article className="group relative rounded-2xl bg-white border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
>
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-t-2xl ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="m-4">
          <p className="text-gray-500">{product.category}</p>
        </div>
      </Link>
      <div className="m-3 flex items-center justify-between">
        <p className='text-lg text-gray-900'>${product.price}</p>
        <button
           className="inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-medium text-sm rounded-xl px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 active:scale-95"
          onClick={(e) => {
            e.stopPropagation(); 
            addItem(product, 1);
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
        </button>
      </div>
        </article>
    </div>
  );
}

export default ProductCart;