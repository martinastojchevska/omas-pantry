import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import products from "./products-data.js";
import "./Catalogue.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Catalogue() {
    const location = useLocation();
    
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDiets, setSelectedDiets] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isDietOpen, setIsDietOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;

    // set category w navbar
    useEffect(() => {
        if (location.state?.selectedCategory) {
            setSelectedCategory(location.state.selectedCategory);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    // setting values from data.js
    const categories = [...new Set(products.flatMap((product) => product.categoryTags))];
    const brands = [...new Set(products.map((product) => product.brand))].filter(Boolean);
    const diets = [...new Set(products.flatMap((product) => product.dietTags))].filter(Boolean);

    // filter 
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory ? product.categoryTags.includes(selectedCategory) : true;
        const matchesBrand = selectedBrands.length > 0 ? selectedBrands.includes(product.brand) : true;
        const matchesDiet = selectedDiets.length > 0 
            ? selectedDiets.some((diet) => product.dietTags.map(d => d.toLowerCase()).includes(diet.toLowerCase())) 
            : true;
        const price = parseFloat(product.price.replace("$", ""));
        const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
        return matchesCategory && matchesBrand && matchesDiet && matchesPrice;
    });

    // pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    // checkbox
    const handleCheckboxToggle = (setState, value) => {
        setState((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    // product count
    const getCountByBrand = (brand) => products.filter((p) => p.brand === brand).length;
    const getCountByDiet = (diet) => products.filter((p) => 
        p.dietTags.map(d => d.toLowerCase()).includes(diet.toLowerCase())
    ).length;

    // reset
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedBrands, selectedDiets, priceRange]);

    return (
        <div className="catalogue">
            <aside className="filters">

                <div className="filter-section">
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="">Choose Category</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                    </select>
                </div>

                {/* brand */}
                <div className="filter-section">
                    <h3 onClick={() => setIsBrandOpen(!isBrandOpen)} className="collapsible-header">
                        <span className="header-left">
                            Brand
                            <div className="info-icon-wrapper">
                                <HiOutlineInformationCircle className="info-icon" />
                                <span className="tooltip">
                                    Filter products by brand manufacturer
                                </span>
                            </div>
                        </span>
                        {isBrandOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </h3>
                    {isBrandOpen && (
                        <div className="filter-options">
                            {brands.map((brand) => (
                                <div key={brand} className="filter-item">
                                    <div>
                                        <input
                                            type="checkbox"
                                            id={`brand-${brand}`}
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleCheckboxToggle(setSelectedBrands, brand)}
                                        />
                                        <label htmlFor={`brand-${brand}`}>{brand}</label>
                                    </div>
                                    <span className="item-count">
                                        ({getCountByBrand(brand)})
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* diet */}
                <div className="filter-section">
                    <h3 onClick={() => setIsDietOpen(!isDietOpen)} className="collapsible-header">
                        <span className="header-left">
                            Diet 
                            <div className="info-icon-wrapper">
                                <HiOutlineInformationCircle className="info-icon" />
                                <span className="tooltip">
                                    Filter items by your dietary needs, wether thats vegan, vegetarian or bio!
                                </span>
                            </div>
                        </span>
                        {isDietOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </h3>
                    {isDietOpen && (
                        <div className="filter-options">
                            {diets.map((diet) => (
                                <div key={diet} className="filter-item">
                                    <div>                       
                                        <input
                                            type="checkbox"
                                            id={`diet-${diet}`}
                                            checked={selectedDiets.includes(diet)}
                                            onChange={() => handleCheckboxToggle(setSelectedDiets, diet)}
                                        />
                                        <label htmlFor={`diet-${diet}`}>
                                            {diet.charAt(0).toUpperCase() + diet.slice(1)}
                                        </label>                                  
                                        <span className="item-count">
                                            ({getCountByDiet(diet)})
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* price */}
                <div className="filter-section">
                    <h3 onClick={() => setIsPriceOpen(!isPriceOpen)} className="collapsible-header">
                        <span className="header-left">
                            Price
                            <div className="info-icon-wrapper">
                                <HiOutlineInformationCircle className="info-icon" />
                                <span className="tooltip">
                                    Set minimum and maximum price range
                                </span>
                            </div>
                        </span>
                        {isPriceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </h3>
                    {isPriceOpen && (
                        <div className="filter-options price-filter">
                            <label>
                                Min: $
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                    min="0"
                                />
                            </label>
                            <label>
                                Max: $
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                    min="0"
                                />
                            </label>
                        </div>
                    )}
                </div>
            </aside>

            {/* products grid */}
            <main className="product-grid-container">
                <div className="product-grid">
                {currentProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`} className="product-link">
                            <div className="product-image-container">
                                <img src={product.img.src} alt={product.img.alt} className="product-image" />
                                <div className="product-n-price"> 
                                    <p className="product-price">{product.price}</p>
                                    <p className="product-weight">{product.weight}</p>
                                </div>
                            </div>
                            <div className="title-n-plus">
                                <h4 className="product-title">{product.title}</h4>
                                <BsFillPlusCircleFill className="plus-icon" />
                            </div>
                        </Link>
                    </div>
                ))}
                </div>

                {/* pagination  */}
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`page-number ${page === currentPage ? "active" : ""}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Catalogue;