"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CursorToggle } from "@/components/cursor-toggle";
import { contactInfo } from "@/app/data";

const HeaderSection: FC<{
  cursorEnabled: boolean;
  setCursorEnabled: Dispatch<SetStateAction<boolean>>;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}> = ({
  cursorEnabled,
  setCursorEnabled,
  toggleMobileMenu,
  mobileMenuOpen,
}) => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-xl"
        >
          {contactInfo.name}
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {["Home", "About Me", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-emerald-600 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <CursorToggle enabled={cursorEnabled} onToggle={setCursorEnabled} />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {["Home", "About Me", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-emerald-600 transition-colors py-2 block"
                      onClick={toggleMobileMenu}
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderSection;
