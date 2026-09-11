import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductData from '../../data/productdata';
import { useCart } from '../../hook/useCart';

function ProductDetail() {
    const { id } = useParams();
    const { addItem, openCart } = useCart();

    const product = ProductData.find((p) => String(p.id) === String(id));
    if (!product) {
        return (
            <div className="p-12 text-center text-gray-500 font-medium">
                Product Not Found
            </div>
        );
    }

    const [selectedSize, setSelectedSize] = useState(product.size?.[0] || 'S');
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Sage Green');
    const [quantity, setQuantity] = useState(1);
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

    const price = Number(product.price) || 0;
    const oriprice = Number(product.oriprice) || 0;
    const savings = oriprice > price ? (oriprice - price).toFixed(2) : 0;
    const discountPercent = oriprice > 0 ? Math.round(((oriprice - price) / oriprice) * 100) : 0;
    const totalPrice = (price * quantity).toFixed(2);

    const handleAddToCart = () => {
        addItem({
            ...product,
            selectedSize,
            selectedColor,
            quantity
        });
        openCart();
    };

    return (
        <div className="max-w-6xl mx-auto p-6 my-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center group">
                    {product.img ? (
                        <img 
                            src={product.img} 
                            alt={product.title || product.category} 
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="text-gray-400 font-medium">No Image Available</div>
                    )}
                    <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                        {product.category || 'Outerwear'}
                    </span>
                    {discountPercent > 0 && (
                        <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                            -{discountPercent}% OFF
                        </span>
                    )}
                    <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                            {product.category}
                        </span>
                        <div className="flex justify-between items-center mt-1">
                            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                                <span className="text-amber-500 text-sm">★</span>
                                <span className="font-bold text-xs text-amber-900">{product.rating || '4.8'}</span>
                                <span className="text-gray-400 text-xs">(128)</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-gray-900">
                            ${price.toFixed(2)}
                        </span>
                        {oriprice > price && (
                            <del className="text-lg font-medium text-gray-400">
                                ${oriprice.toFixed(2)}
                            </del>
                        )}
                        {savings > 0 && (
                            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                                Save ${savings}
                            </span>
                        )}
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                            Color: <span className="text-gray-900">{selectedColor}</span>
                        </label>
                        <div className="flex gap-3">
                            {['Dark Gray', 'White', 'Sage Green'].map((colorName) => (
                                <button
                                    key={colorName}
                                    onClick={() => setSelectedColor(colorName)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                                        selectedColor === colorName ? 'border-indigo-600 scale-110' : 'border-gray-200'
                                    }`}
                                >
                                    <span 
                                        className="w-6 h-6 rounded-full block" 
                                        style={{
                                            backgroundColor: 
                                                colorName === 'Dark Gray' ? '#2d3748' : 
                                                colorName === 'White' ? '#ffffff' : '#525b53',
                                            border: colorName === 'White' ? '1px solid #e2e8f0' : 'none'
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Select Size
                            </label>
                            <button 
                                onClick={() => setIsSizeGuideOpen(true)}
                                className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1"
                            >
                                📐 Size Guide
                            </button>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2.5 text-sm font-semibold rounded-xl border transition-all ${
                                        selectedSize === size
                                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-gray-50">
                            <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 font-bold hover:bg-white rounded-lg transition-colors"
                            >
                                -
                            </button>
                            <span className="w-10 text-center font-bold text-sm text-gray-800">
                                {quantity}
                            </span>
                            <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 font-bold hover:bg-white rounded-lg transition-colors"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <span>🛍️ Add To Cart</span>
                            <span>•</span>
                            <span>${totalPrice}</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100 text-center">
                        <div className="p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs font-bold text-gray-800">Free Express</p>
                            <p className="text-[10px] text-gray-400">Orders over $100</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs font-bold text-gray-800">30-Day Return</p>
                            <p className="text-[10px] text-gray-400">Hassle free policy</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-xl">
                            <p className="text-xs font-bold text-gray-800">Authentic</p>
                            <p className="text-[10px] text-gray-400">100% Guaranteed</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;