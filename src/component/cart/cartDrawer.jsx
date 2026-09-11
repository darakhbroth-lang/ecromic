// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../../hooks/useCart';
// import { useOrder } from '../../context/OrderContext';
// import { FormatCurrency } from '../../utils/FormatCurrency';
// import CartItem from './cartItem';
// import Button from '../ui/Button';

// export default function CartDrawer() {
//   const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, clearCart } =
//     useCart();
//   const { addOrder } = useOrder();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     if (items.length === 0) return;

//     // 1. Create new order in history
//     addOrder(items, subtotal);

//     // 2. Clear cart items if clearCart function is provided by useCart
//     if (typeof clearCart === 'function') {
//       clearCart();
//     }

//     // 3. Close drawer and navigate to account page
//     closeCart();
//     navigate('/account');
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-50 transition-opacity ${
//         isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
//       }`}
//       aria-hidden={!isOpen}
//     >
//       <button
//         aria-label="Close cart"
//         onClick={closeCart}
//         className="absolute inset-0 bg-panel-deep/80 backdrop-blur-sm"
//       />

//       <aside
//         className={`absolute right-0 top-0 flex h-full w-full max-w-md bg-gray-100 flex-col border-l border-gray-200 transition-transform duration-300 ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Shopping cart"
//       >
//         <div className="flex items-center justify-between border-b border-gray-300 px-6 py-5">
//           <h2 className="font-display text-sm uppercase tracking-widest text-cream">
//             Cart
//           </h2>
//           <button
//             onClick={closeCart}
//             aria-label="Close cart"
//             className="text-xl text-cream-dim hover:text-amber"
//           >
//             &times;
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-6">
//           {items.length === 0 ? (
//             <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
//               <p className="font-display text-cream">Your cart is silent.</p>
//               <p className="text-sm text-cream-dim">
//                 Add something worth listening to.
//               </p>
//             </div>
//           ) : (
//             items.map((item) => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onUpdateQuantity={updateQuantity}
//                 onRemove={removeItem}
//               />
//             ))
//           )}
//         </div>

//         {items.length > 0 && (
//           <div className="border-t border-gray-300 px-6 py-5">
//             <div className="flex items-center justify-between font-mono text-sm text-cream-dim">
//               <span>Subtotal</span>
//               <span className="text-cream">{FormatCurrency(subtotal)}</span>
//             </div>
//             <p className="mt-1 text-xs text-steel">
//               Shipping and taxes calculated at checkout.
//             </p>
//             <div className="mt-4 flex flex-col gap-2">
//               <Button onClick={handleCheckout}>
//                 Checkout
//               </Button>
//               <Button as={Link} to="/cart" variant="secondary" onClick={closeCart}>
//                 View Cart
//               </Button>
//             </div>
//           </div>
//         )}
//       </aside>
//     </div>
//   );
// }


import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import CartItem from './cartItem';


export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    closeCart();
    navigate('/checkoutpage');
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <button
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-panel-deep/80 backdrop-blur-sm"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md bg-gray-100 flex-col border-l border-gray-200 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
       
      >
        <div className="flex items-center justify-between border-b border-gray-300 px-6 py-5">
          <h2 className="font-display text-sm uppercase tracking-widest text-cream">
            
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-xl text-cream-dim hover:text-amber"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
              <p className="font-display text-cream">Your cart is silent.</p>
              <p className="text-sm text-cream-dim">
                Add something worth listening to.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-300 px-6 py-5">
            <div className="flex items-center justify-between font-display text-sm text-cream-dim">
              <span>Subtotal</span>
              <span className="text-white">{subtotal}</span>
            </div>
            <p className="mt-1 text-xs text-gray-100">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <button onClick={handleGoToCheckout}>
                Checkout
              </button>
              <button as={Link} to="/cart" variant="secondary" onClick={closeCart}>
                View Cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}