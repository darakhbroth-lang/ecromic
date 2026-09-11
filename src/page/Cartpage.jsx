import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from '../hook/useCart';
import CartItem from '../component/cart/cartItem';


function Cartpage() {
    const { items, updateQuantity, removeItem } = useCart();
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );
    if (items.length === 0) {
        return (
            <>
                <div className='mx-auto max-w-1xl px-6 py-24 text-center'>
                    <p className='font-display text-xl text-white'>
                        Your cart is silent
                    </p>
                    <p>
                        Add something worth listenng to.
                    </p>
                    <Button as={Link} to="/shop">
                        Brawse the catelog
                    </Button>
                </div>
            </>
        )
    }
    return (
        <div className='max-w-6xl px-6 py-14'>
            <h1 className='font-display text-sm font-semibold text-white'>Your Cart</h1>
            <div className='mt-8 grid gap-10 md:grid-cols-3'>
                <div className='md:col-span-2'>
                    {items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                        />
                    ))}
                </div>
                <div className="h-fit rounded-sm border border-gray-300 shadow-gray-300 shadow-md hover:shadow-gray-400 p-6">
                    <div className=' m-2 border-b '>
                        <h2 className="font-extrabold text-xl text-orange-800  uppercase tracking-widest">
                        ទំនិញសរុប
                       </h2>
                       <p className='text-sm text-gray-600 mt-5 mb-5 '>សូមពិនិត្យមើលទំនិញរបស់អ្នក</p></div>
                    <div className="space-y-3">
                        {items.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm mt-10">
                                <span>{item.category} (x{item.quantity})</span>
                                <span>${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between font-mono text-sm">
                        <span className="text-cream-dim">តម្លែសរុម</span>
                        <span className="text-cream">${subtotal}</span>
                    </div>
                    <p className="mt-5 text-sm text-red-700">
                        រង់ចាំកាត្រួតេពិនិត្យម្ដងទៀត
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cartpage
