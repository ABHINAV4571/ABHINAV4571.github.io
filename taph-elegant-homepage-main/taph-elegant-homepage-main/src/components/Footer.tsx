
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-taph-softBlack text-taph-ivory py-8 px-4 mt-12">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-taph-ivory flex items-center justify-center">
                <span className="font-serif text-taph-softBlack text-sm font-medium">TAPH</span>
              </div>
              <span className="ml-3 font-serif text-xl">The Art of Politics & History</span>
            </div>
            <p className="text-taph-ivory/70 text-sm">
              Thoughtful analysis on politics, history, and the intersection of power and society.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Topics', 'Contact', 'Privacy Policy', 'Terms of Use'].map(link => (
                <li key={link}>
                  <a href="#" className="text-taph-ivory/70 hover:text-taph-ivory transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Subscribe</h4>
            <p className="text-taph-ivory/70 text-sm mb-4">
              Stay updated with our latest articles and analyses.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-taph-softBlack border border-taph-tan/30 text-taph-ivory rounded-l-md px-3 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-taph-tan"
              />
              <button
                type="submit"
                className="bg-taph-tan text-taph-softBlack rounded-r-md px-4 py-2 text-sm font-medium hover:bg-taph-tan/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-taph-ivory/10 text-center text-taph-ivory/50 text-sm">
          © {new Date().getFullYear()} The Art of Politics & History. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
