import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'



export default function Footer() {
  return (
    <div className="footer">
      
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2>Nitesh Mobile</h2>
          <p>
            Buy premium mobile cases, cover and accessories at the best prices.
            Trendy collection updated daily.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h2>Customer Support</h2>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h2>Get in Touch</h2>
          <p>📍Hazaribagh (Jharkhand)</p>
          <p>✉️kumarvermanitesh54@gmail.com</p>
          <p>📞+91 7070876671</p>
          <a href="https://www.facebook.com/share/1LCXAbtJhv/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} color="#1877F2"/>
          </a>
          <a href="https://www.instagram.com/nitesh_verma_07_?igsh=b3RmM3hzdnpwemp1" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} color="#1877F2"/>
          </a>
          <a href="https://x.com/NVerma62827" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} color="#1877F2"/>
          </a>
          

        </div>

      </div>

      <hr />

      <p className="copyright">© 2026 Nitesh Mobile. All Rights Reserved.</p>
     
    </div>
  );
}
