import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCart from "../component/product/ProductCart";
// import Sidebar from "../component/layout/Sidebar";

export default function Shoppage() {
  const {
    categories,
    activeCategory,
    setActiveCategory,
    query,
    setQuery,
    filteredProducts,
  } = useContext(ProductContext);

  return (
    <div className="max-w-8xl bg-gray-100 gap-20 p-6">
     {/* <Sidebar> */}
       <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-3xl font-display text-gray-800">
              Shop Products
            </h1>
          </div>

          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-72 bg-white"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const catId = typeof category === 'object' ? category.id : category;
            const catLabel = typeof category === 'object' ? category.label : category;
            
            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                  activeCategory === catId
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-amber-800 border border-amber-300 hover:bg-amber-50'
                }`}
              >
                {catLabel}
              </button>
            );
          })}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-sm border bg-white py-16 text-center">
            <p className="text-gray-600">Nothing matches that.</p>
            <p className="mt-1 text-sm text-gray-400">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
     {/* </Sidebar> */}
    </div>
  );
}