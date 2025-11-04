import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Framer Motion Variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 220,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.97,
      transition: { duration: 0.15 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 18,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white bg-gray-900 shadow-md border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            PANDURANGAN
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center md:order-2 space-x-3" ref={userMenuRef}>
          {/* User avatar */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            type="button"
            className="flex text-sm bg-black rounded-full focus:ring-4 focus:ring-indigo-500"
          >
            <span className="sr-only">Open user menu</span>
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-10 h-10 bg-indigo-600 rounded-full"
              src="./pic.png"
              alt="user"
            />
          </motion.button>

          {/* User dropdown */}
          <AnimatePresence>
            {isUserMenuOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute right-4 top-14 w-48 z-50 rounded-lg shadow bg-black divide-y divide-gray-600 cursor-pointer"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm font-medium text-white">
                    PANDURANGAN
                  </span>
                </div>

        {/* <ul className="py-2 text-gray-200">
        {[
            { name: "Email", link: "mailto:pandurangan6@gmail.com" },
            { name: "Whatsapp", link: "https://wa.me/919876543210" },
            { name: "Instagram", link: "https://www.instagram.com/yourusername" },
        ].map(({ name, link }) => (
            <motion.li
            key={name}
            whileHover={{
                backgroundColor: "#4F46E5",
                color: "#fff",
                x: 5,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm"
            >
                {name}
            </a>
            </motion.li>
        ))}
        </ul> */}


<ul className="py-2 text-gray-200">
  {[
    { name: "Whatsapp", link: "https://wa.me/917358403005" },
    { name: "Instagram", link: "https://www.instagram.com/yourusername" },
    { name: "Email", link: "mailto:pandurangan6@gmail.com" },
  ].map(({ name, link }) => (
    <motion.li
      key={name}
      whileHover={{
        backgroundColor: "#4F46E5",
        color: "#fff",
        x: 5,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <a
        href={link}
        target={name === "Email" ? "_self" : "_blank"}
        rel={name === "Email" ? undefined : "noopener noreferrer"}
        className="block px-4 py-2 text-sm"
      >
        {name}
      </a>
    </motion.li>
  ))}
</ul>


              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700"
          >
            {isMenuOpen ? (
              // X icon
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              // Menu icon
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </motion.svg>
            )}
          </motion.button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex flex-row space-x-8 font-medium">
            {["Home", "About", "Skills", "Experience"].map((item) => (
              <motion.li key={item} whileHover={{ y: -2 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    item === "Home"
                      ? "text-indigo-500"
                      : "text-white hover:text-indigo-400"
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-indigo-900 border-t border-indigo-800"
          >
            <ul className="flex flex-col font-medium p-4 space-y-2">
              {["Home", "About", "Skills", "Experience"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block py-2 px-3 rounded-sm ${
                      item === "Home"
                        ? "bg-black text-indigo-500"
                        : "text-white hover:bg-gray-700 hover:text-indigo-400"
                    }`}
                    onClick={() => setIsMenuOpen(false)} // close on click
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
