import React from "react";
import instagramIcon from "../../Assets/InstagramIcon.svg";

const Footer = () => {
  const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.6 7.6c.1.3.1.7.1 1.1 0 4.3-3.2 9.3-9.3 9.3-1.9 0-3.6-.6-5-1.6.3 0 .7.1 1 .1 1.6 0 3-.5 4.2-1.5-1.5 0-2.7-1-3.1-2.3.2 0 .5.1.7.1.3 0 .7-.1 1-.2-1.6-.3-2.7-1.7-2.7-3.4v-.1c.5.3 1 .5 1.6.5a3.2 3.2 0 0 1-1.4-2.7c0-.6.2-1.1.5-1.6a9.3 9.3 0 0 0 6.8 3.5c-.1-.3-.1-.5-.1-.8a3.2 3.2 0 0 1 3.2-3.2c.9 0 1.8.4 2.4 1a6.2 6.2 0 0 0 2-1c-.2.7-.7 1.3-1.4 1.7a6.4 6.4 0 0 0 1.8-.5c-.4.6-.9 1.1-1.4 1.5z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-2.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 
    2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.3 17v-7H5.7v7h2.6M7 8.5a1.5 
    1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4.5 8.5v-4c0-1.1 0-2.5 1.5-2.5s1.5 
    1.3 1.5 2.5v4h2.5v-4.5c0-2.6-1.4-3.8-3.5-3.8-1 0-1.7.5-2 
    1.1h-.1V9.5h-2.4c0 .8 0 7 0 7h2.5z"
      />
    </svg>
  );

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Exclusive */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <button className="bg-black px-4 py-2">➤</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-2">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>

          <div className="flex gap-4 text-lg">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
