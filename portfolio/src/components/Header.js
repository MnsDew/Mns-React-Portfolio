import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Header.css";
import { SocialContactRefContext } from "./App";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const socialContactRef = useContext(SocialContactRefContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This function handles the Social click logic
  const handleSocialClick = () => {
    setIsMobileMenuOpen(false);
    const openCard = () => {
      const el = document.getElementById("contact-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          if (socialContactRef && socialContactRef.current && socialContactRef.current.openEmailCard) {
            socialContactRef.current.openEmailCard();
          }
        }, 500); // Adjust delay as needed
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(openCard, 500);
    } else {
      openCard();
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 400); // Adjust delay if needed
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { path: "/", label: "Home", icon: "🏠", onClick: handleHomeClick },
    { path: "/amthal", label: "Quotes", icon: "💭" },
    { path: "/Technologies", label: "Tech", icon: "⚡" },
    { path: "#", label: "Social", icon: "🌐", onClick: handleSocialClick }
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            {/* Logo here if you have one */}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.onClick ? (
                <motion.button
                  className={`nav-link${location.pathname === "/" && item.label === "Home" ? " active" : ""}${item.label === "Social" ? " social-link" : ""}`}
                  onClick={item.onClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-glow"></span>
                </motion.button>
              ) : (
                <Link 
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-glow"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  className="mobile-nav-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.onClick ? (
                    <motion.button
                      className="mobile-nav-link social-link"
                      onClick={item.onClick}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </motion.button>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;