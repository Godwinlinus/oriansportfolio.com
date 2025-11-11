import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-700 mb-12">
      © {new Date().getFullYear()} Linus Mba. All rights reserved.
    </footer>
  );
}
