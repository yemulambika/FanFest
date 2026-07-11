import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-panelBorder">
      <nav className="container flex items-center justify-between h-20 px-6 sm:px-10 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl uppercase tracking-tight text-white">
            <span className="text-white">FAN</span>
            <span className="text-brand-red">FEST</span>
            <span className="text-white"> 2026</span>
          </span>
        </Link>

        {/* Apply Button */}
        <Link
          to="/apply"
          className="px-6 py-2 rounded-full bg-brand-red text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-red/90 transition-colors"
        >
          Apply Now
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;