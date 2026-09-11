import { createContext, useContext, useMemo, useState } from 'react';
import ProductData from '../data/productdata';

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(ProductData.map((p) => p.category).filter(Boolean)));
    return ['all', ...unique];
  }, []);

  const filteredProducts = useMemo(() => {
    return ProductData.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;

      const matchesQuery = (p.name || '')
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function getProductById(id) {
    return ProductData.find((p) => String(p.id) === String(id)) || null;
  }

  const value = {
    ProductData,
    categories,
    activeCategory,
    setActiveCategory,
    query,
    setQuery,
    filteredProducts,
    getProductById,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error('useProducts must be used within a ProductProvider');
  return ctx;
}