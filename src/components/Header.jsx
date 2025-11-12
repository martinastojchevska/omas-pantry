import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { TiUserOutline } from "react-icons/ti";
import { BiCart } from "react-icons/bi";

function Header() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate('/', { state: { selectedCategory: category } });
    };

    return (
      <header>
         <div className="top-bar">
            <Link to="/" className="logo-link">
                <img src="/src/assets/logo-omas-pantry.png" alt="oma's kitchen logo" />
            </Link>
            <div className="search-container">
                <input type="search" placeholder="What are you looking for?" aria-label="Search" />
                <IoIosSearch className="search-icon" />
            </div>
            <div className="user-actions">
                <TiUserOutline />
                <span>USD ∨</span>
                <BiCart />
            </div>
         </div>
            <nav className="navigation-bar">
                <button onClick={() => handleCategoryClick('Beverages')}>Beverages</button>
                <button onClick={() => handleCategoryClick('Condiments')}>Condiments</button>
                <button onClick={() => handleCategoryClick('Cheese')}>Cheese</button>
                <button onClick={() => handleCategoryClick('Meats')}>Meats</button>
                <button onClick={() => handleCategoryClick('Pastry')}>Pastry</button>
                <button onClick={() => handleCategoryClick('Produce')}>Produce</button>
                <button onClick={() => handleCategoryClick('Snacks')}>Snacks</button>
                <button onClick={() => handleCategoryClick('Supplies')}>Supplies</button>
                <button onClick={() => handleCategoryClick('Non-Foods')}>Non-Foods</button>
            </nav>
      </header>
    )
}

export default Header;