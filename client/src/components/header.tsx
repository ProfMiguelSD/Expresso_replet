import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToContact = () => {
    if (location !== "/") {
      // Navigate to home first, then scroll
      window.location.href = "/#contact";
    } else {
      const contactSection = document.getElementById("contactSection");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-primary transition-colors">
                Prof. Miguel Dourado
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Início
              </Link>
              <button 
                onClick={scrollToContact}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Contato
              </button>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <button 
              onClick={scrollToContact}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
