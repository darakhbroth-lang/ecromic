
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hook/useCart'
import { Link } from 'react-router-dom';

const navLinks = [
    {to :'/' , label:'ទំព័រដើម'},
    {to :'/shop' , label:'ផលិតផល'},
    {to :'/About' , label:'ព៏ត័មានលម្អិត'},
    {to :'/contact' , label:'ទំនាក់ទំនង'},

];

function Navbar() {
    const {itemCount , openCart} = useCart();
    const handleCartClick = () =>{
        openCart();
    }


  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 items-center justify-between h-16">
          <NavLink to='/'>
            <div className="flex-stick-0 font-bold text-3xl tracking-wide text-indigo-400">
            ហាងលក់សម្លៀកបំពាក់
          </div>
          </NavLink>
          <div className="hidden md:block">
            <nav className='items-center gap-10 lg:flex'>
                {navLinks.map((link)=>(
                    <NavLink 
                 key={link.to}
                 to={link.to}
                 className={({isActive}) =>
                    `font-display text-lg tracking-wide transition-colors ${
                     isActive ? 'text-white bg-gray-900 rounded-xl p-2' : 'text-black hover:text-gray-400'       
                    }`
                }
                >
                    {link.label}
                </NavLink>
                ))}
            </nav>
          </div>
         <Link to="/cart" className="inline-block">
              <button 
                className="border-0 text-white rounded-xl p-2 bg-red-900"
                onClick={handleCartClick} 
                aria-label={`Open cart ${itemCount} items`}
              >
                {itemCount > 0 && (
                  <span className="bg-blue-800 text-white rounded-full px-2 py-0.5 text-xs font-semibold">
                    {itemCount}
                  </span>
                )}
                បញ្ជាទិញ
              </button>
          </Link>
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar