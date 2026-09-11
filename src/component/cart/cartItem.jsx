import { useCart } from "../../hook/useCart";

export default function CartItem({ item }) {
  const { updateQuantity, removeItem , items } = useCart();
  

  return (
    <div className="flex items-center gap-4 py-4 px-3 border-b border-gray-200 bg-white hover:bg-gray-50/50 transition-colors duration-150">
      <div className="h-50 w-30  overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="flex flex-1 flex-col justify-between self-stretch">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
            {item.name}
          </h3>
          
          <button
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name}`}
            className="text-xs font-medium text-gray-400 hover:text-red-600 transition-colors p-1 -mr-1"
          >
            Remove
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <p className="font-mono text-sm font-bold text-gray-900">
            ${item.price}
          </p>
         
          <div className="flex items-center border border-gray-200 rounded-md bg-gray-50">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
              className="px-2.5 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent rounded-l-md transition-colors"
            >
              −
            </button>
            <span className="px-3 text-xs font-semibold text-gray-800 select-none">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="px-2.5 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-r-md transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}