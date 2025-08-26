import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-[#0f172a] text-gray-500 text-sm">
      © {new Date().getFullYear()} Linus Mba. All rights reserved.
    </footer>
  );
}
