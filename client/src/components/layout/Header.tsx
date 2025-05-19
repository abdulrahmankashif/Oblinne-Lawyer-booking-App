import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Scale } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [language, setLanguage] = useState<"en" | "ur">("en");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-pakgreen flex items-center justify-center text-white mr-2">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <span className="font-roboto font-bold text-pakblue text-xl">Oblinne</span>
                <span className="block text-xs text-pakdarkgray">Pakistani Legal Services</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <a className={`font-opensans font-semibold ${location === "/" ? "text-pakblue" : "text-pakdarkgray"} hover:text-pakgreen transition`}>
                Home
              </a>
            </Link>
            <Link href="/lawyers">
              <a className={`font-opensans font-semibold ${location.startsWith("/lawyers") ? "text-pakblue" : "text-pakdarkgray"} hover:text-pakgreen transition`}>
                Lawyers
              </a>
            </Link>
            <a href="#services" className="font-opensans font-semibold text-pakdarkgray hover:text-pakgreen transition">
              Services
            </a>
            <a href="#about" className="font-opensans font-semibold text-pakdarkgray hover:text-pakgreen transition">
              About
            </a>
            <a href="#contact" className="font-opensans font-semibold text-pakdarkgray hover:text-pakgreen transition">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:inline-flex text-pakblue border-pakblue hover:bg-pakblue hover:text-white"
            >
              Login
            </Button>
            <Button 
              className="hidden md:inline-flex bg-pakgreen hover:bg-opacity-90 text-white"
            >
              Sign Up
            </Button>
            
            <div className="flex items-center">
              <span className={`mr-2 text-pakdarkgray text-sm ${language === "en" ? "font-semibold" : ""}`}>EN</span>
              <button 
                onClick={() => setLanguage(language === "en" ? "ur" : "en")}
                className="w-10 border border-gray-300 rounded-full p-0.5 flex"
              >
                <div className={`bg-pakgreen h-4 w-4 rounded-full transform transition-transform ${language === "ur" ? "translate-x-5" : ""}`}></div>
              </button>
              <span className={`ml-2 text-pakdarkgray text-sm font-urdu ${language === "ur" ? "font-semibold" : ""}`}>اردو</span>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-pakdarkgray">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="px-1 py-6 space-y-4">
                  <Link href="/">
                    <a className={`block font-opensans font-semibold ${location === "/" ? "text-pakblue" : "text-pakdarkgray"} hover:text-pakgreen`}>
                      Home
                    </a>
                  </Link>
                  <Link href="/lawyers">
                    <a className={`block font-opensans font-semibold ${location.startsWith("/lawyers") ? "text-pakblue" : "text-pakdarkgray"} hover:text-pakgreen`}>
                      Lawyers
                    </a>
                  </Link>
                  <a href="#services" className="block font-opensans font-semibold text-pakdarkgray hover:text-pakgreen">
                    Services
                  </a>
                  <a href="#about" className="block font-opensans font-semibold text-pakdarkgray hover:text-pakgreen">
                    About
                  </a>
                  <a href="#contact" className="block font-opensans font-semibold text-pakdarkgray hover:text-pakgreen">
                    Contact
                  </a>
                  <div className="pt-2 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full text-pakblue border-pakblue hover:bg-pakblue hover:text-white"
                    >
                      Login
                    </Button>
                    <Button 
                      className="w-full bg-pakgreen hover:bg-opacity-90 text-white"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
