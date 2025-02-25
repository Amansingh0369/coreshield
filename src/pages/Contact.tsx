import { Mail, Phone, MapPin } from 'lucide-react';
import ContactFooter from '@/components/Contact';

const Contact = () => {
  return (
    <div className="pt-32 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extralight text-black mb-6 tracking-tight uppercase">Contact Us</h1>
          <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to learn more about our defense technology solutions
            and how we can help strengthen India's defense capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="bg-black py-10 px-4  md:p-10 overflow-hidden rounded-2xl shadow-2xl border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 h-full">
            <h2 className="text-3xl font-extralight text-white mb-8 uppercase">Our Location</h2>
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.65,12.84,77.67,12.85&layer=mapnik"
              width="100%"
              height="90%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-extralight text-black mb-8 uppercase">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <MapPin className="h-7 w-7 text-blue-500 mr-4 mt-1 group-hover:text-indigo-600 transition-colors" />
                  <div>
                    <div className="mb-6">
                      <h3 className="font-light text-black text-lg mb-2">Operating Address</h3>
                      <p className="text-gray-600 leading-relaxed">18 C, Ummaid Heritage<br />Jodhpur - 342011, RJ</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-light text-black text-lg mb-2">Registered Address</h3>
                      <p className="text-gray-600 leading-relaxed">NEEDS3, Electronic City<br />Bengaluru - 560100, KA</p>
                    </div>
                    <div>
                      <h3 className="font-light text-black text-lg mb-2">IDEX Partner Incubator</h3>
                      <p className="text-gray-600 leading-relaxed">FITT, IIT Delhi<br />Delhi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Mail className="h-7 w-7 text-blue-500 mr-4 mt-1 group-hover:text-indigo-600 transition-colors" />
                  <div>
                    <h3 className="font-light text-black text-lg mb-2">Email</h3>
                    <a href="mailto:contact@coreshield.com" className="text-gray-600 hover:text-black transition-colors">contact@coreshield.com</a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Phone className="h-7 w-7 text-blue-500 mr-4 mt-1 group-hover:text-indigo-600 transition-colors" />
                  <div>
                    <h3 className="font-light text-black text-lg mb-2">Phone</h3>
                    <a href="tel:+910801234567" className="text-gray-600 hover:text-black transition-colors">+91 (080) 1234-5678</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-extralight text-black mb-6 uppercase">Business Hours</h2>
              <div className="space-y-3">
                <p className="text-gray-600 text-lg">Monday - Friday: <span className="text-black">9:00 AM - 6:00 PM</span></p>
                <p className="text-gray-600 text-lg">Saturday: <span className="text-black">9:00 AM - 1:00 PM</span></p>
                <p className="text-gray-600 text-lg">Sunday: <span className="text-black">Closed</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default Contact;