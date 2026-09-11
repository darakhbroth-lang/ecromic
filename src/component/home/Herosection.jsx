import React from 'react';
import ProductData from '../../data/productdata';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';

function Herosection() {
  const products = ProductData?.filter((item) => item.bestseller === true) || [];

  const {addItem , openCart} = useCart();

  const handleAddToCart = (item) => {
    addItem(item,1);
    openCart();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((item) => (
          <article 
            key={item.id} 
            className="group relative rounded-2xl bg-white border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Link to={`/product/${item.id}`} className="block relative overflow-hidden rounded-t-2xl">
              {item.text && (
                <span className="absolute top-3 right-3 z-10 rounded-full text-xs font-semibold px-3 py-1 text-white bg-blue-700/90 backdrop-blur-md shadow-sm">
                  {item.text}
                </span>
              )}
              <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
                <img
                  src={item.img}
                  alt={item.name || 'Product Image'}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
             
              <div className="p-4 pb-0">
                <span className="text-xs uppercase tracking-wider font-medium text-gray-400">
                  {item.category}
                </span>
                <h3 className="text-base font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-700 transition-colors mt-1">
                  {item.name || 'Product Title'}
                </h3>
              </div>
            </Link>


            <div className="p-4 pt-3 flex items-center justify-between border-t border-gray-50 mt-4">
              <span className="text-lg font-bold text-gray-900">
                ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
              </span>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-medium text-sm rounded-xl px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 active:scale-95"
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.category} to cart`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Herosection;