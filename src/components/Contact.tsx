import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactFooter = () => {

  const menuItems = [
    {name: 'Home', href: '/'},
    {name: 'Solutions', href: '/solutions'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
    {name: 'Careers', href: '/careers'},
    {name: 'Trials', href: '/trials'},
  ];

  const companyInfo = [
    { name: "Press", href: "#" },
    { name: "Brand Assets", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" }
  ];

  return (
    <footer className="bg-black w-full text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Link to="/" className="flex items-center" aria-label="Home">
                <img src="/coreshield.png" alt="logo" className="h-12 w-30" />
              </Link>
              <p className="text-gray-400">Artificial Intelligence – Securing Tomorrow, Today.</p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group relative py-2 text-gray-300 hover:text-white uppercase font-light text-sm transition-all duration-300 flex items-center"
                  >
                    <span className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-3">
              {companyInfo.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group relative py-2 text-gray-300 hover:text-white font-light text-sm transition-all duration-300 flex items-center"
                  >
                    <span className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <div className="text-gray-400 space-y-6">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@coreshield.com" className="hover:text-white transition-colors">info@coreshield.com</a>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="mb-4">
                      <p className="font-medium text-gray-300">Operating Address</p>
                      <p>18 C, Ummaid Heritage<br />Jodhpur - 342011, RJ</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium text-gray-300">Registered Address</p>
                      <p>NEEDS3, Electronic City<br />Bengaluru - 560100, KA</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300">IDEX Partner Incubator</p>
                      <p>FITT, IIT Delhi<br />Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        
      </div>
      <div className="mt-16 py-8 px-20 bg-black w-full  pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CoreShield. All rights reserved.</p>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="group relative p-2 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                    {social === 'Twitter' ? (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
    </footer>
  );
};

export default ContactFooter;
