import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import products from './products-data.js';
import './ProductPage.css';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';
import Breakline from './Breakline';

function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const product = products.find(p => p.id === parseInt(id));

    const relatedItems = products
        .filter(p => p.id !== parseInt(id))
        .slice(0, 8);

    return (
        <>
            <button className="back-button" onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </button>
            
            <div className="product-details">
                <div className="product-image-section">
                    <img src={product.img.src} alt={product.img.alt} className="product-image" />
                </div>
                
                <div className="product-info-section">
                    <h1>{product.title}</h1>
                    
                    <div className="product-meta">
                        <p className="price">{product.price}</p>
                        <p className="weight">{product.weight}</p>
                    </div>

                    {product.brand && (
                        <p className="brand">Brand: {product.brand}</p>
                    )}

                    {product.dietTags && product.dietTags.length > 0 && (
                        <div className="diet-tags">
                            {product.dietTags.map(tag => (
                                <span key={tag} className="tag">
                                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className="description">{product.desc}</p>

                    <button className="add-to-cart">
                        <BsFillPlusCircleFill /> Add to Cart
                    </button>
                </div>
            </div>

            <Breakline />

            {/* related items */}
            <div className="related-items-section">
                <h2 className="related-items-heading">Related Items</h2>
                <div className="related-items-grid">
                    {relatedItems.map((item) => (
                        <div key={item.id} className="product-card">
                            <Link to={`/product/${item.id}`} className="product-link">
                                <div className="product-image-container">
                                    <img src={item.img.src} alt={item.img.alt} className="product-image" />
                                    <div className="product-n-price">
                                        <p className="product-price">{item.price}</p>
                                        <p className="product-weight">{item.weight}</p>
                                    </div>
                                </div>
                                <div className="title-n-plus">
                                    <h4 className="product-title">{item.title}</h4>
                                    <BsFillPlusCircleFill className="add-icon" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductPage;