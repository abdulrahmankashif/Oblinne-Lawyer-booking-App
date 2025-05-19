import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  Scale
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pakblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pakgreen mr-2">
                <Scale className="h-5 w-5" />
              </div>
              <span className="font-roboto font-bold text-xl">Oblinne</span>
            </div>
            <p className="text-gray-300 mb-4">Pakistan's premier platform connecting clients with skilled legal professionals.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pakgreen transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pakgreen transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pakgreen transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-pakgreen transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/lawyers">
                  <a className="text-gray-300 hover:text-white transition">Find a Lawyer</a>
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition">Legal Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/lawyers?specialization=family">
                  <a className="text-gray-300 hover:text-white transition">Family Law</a>
                </Link>
              </li>
              <li>
                <Link href="/lawyers?specialization=corporate">
                  <a className="text-gray-300 hover:text-white transition">Corporate Law</a>
                </Link>
              </li>
              <li>
                <Link href="/lawyers?specialization=criminal">
                  <a className="text-gray-300 hover:text-white transition">Criminal Defense</a>
                </Link>
              </li>
              <li>
                <Link href="/lawyers?specialization=property">
                  <a className="text-gray-300 hover:text-white transition">Property Law</a>
                </Link>
              </li>
              <li>
                <Link href="/lawyers?specialization=immigration">
                  <a className="text-gray-300 hover:text-white transition">Immigration Law</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Blue Area, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+92 51 1234567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@oblinne.pk</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-300">&copy; 2023 Oblinne Legal Services. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition mr-4">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
