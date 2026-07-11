import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-panelBorder mt-auto">
      <div className="container py-8 flex flex-col items-center gap-4">
        {/* Logo */}
        <Link to="/" className="font-display text-xl uppercase tracking-tight text-white">
          <span className="text-white">FAN</span>
          <span className="text-brand-red">FEST</span>
          <span className="text-white"> 2026</span>
        </Link>

        {/* Event info */}
        <p className="text-muted text-sm">
          August 14–16, 2026 &middot; For creators, by creators.
        </p>

        {/* Legal links */}
        <p className="text-xs text-muted/70">
          &copy; 2026 FanFest. All rights reserved. &nbsp;|&nbsp;
          <Link to="/privacy" className="text-brand-red hover:underline">
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link to="/contact" className="text-brand-red hover:underline">
            Contact Us
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;