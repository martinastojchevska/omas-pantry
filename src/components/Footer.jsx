import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-column">
                <img src="/src/assets/logo-omas-pantry.png" alt="oma's kitchen logo" />
                <p>25 Fake Avenue</p>
                <p>Brooklyn, NY, 11205</p>
                <p>Contact us</p>
                <p>Fictional brand © 2025</p>
            </div>
            <div className="footer-column">
                <h2>Our Mission</h2>
                <p>From our family's kitchen to yours, Oma's Pantry brings the authentic flavors and cherished goods of the Netherlands a little closer to home.</p>
                <p><a href="#read-more">Read more about our story.</a></p>
            </div>
            <div className="footer-column">
                <h2>Customer Service</h2>
                <ul>
                    <li><a href="#faq">Order FAQ</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#gift-cards">Gift Cards</a></li>
                    <li><a href="#returns">Returns</a></li>
                    <li><a href="#shipping-policy">Shipping Policy</a></li>
                    <li><a href="#terms-of-service">Terms of Service</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Follow Us</h2>
                <ul>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#x">X, The Everything App</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#email">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;