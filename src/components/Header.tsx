import { ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <nav className="border-b border-[#2e2e2e] bg-[#121212]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              alt="Tokyo AI Toolkit" 
              className="h-6 w-auto" 
              src="https://www.usetokyo.com/logo2.svg"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">Features</a>
            <a href="#tracking" className="nav-link">AI Tracking</a>
            <a href="#clients" className="nav-link">Client Management</a>
            <a 
              href="https://www.npmjs.com/package/tokyo-ai" 
              target="_blank" 
              className="nav-link hover:opacity-80 flex items-center gap-2"
            >
              <img 
                src="https://www.usetokyo.com/npm.png" 
                alt="Npm package" 
                className="h-10 w-10 invert"
              />
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hover:opacity-80 text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer">
              Login
            </button>
            <button className="bg-white hover:opacity-80 text-black px-4 py-2 font-semibold rounded-lg transition-colors cursor-pointer">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;