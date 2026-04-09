import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center border-t border-[#e5e2e1]/10 gap-8">
        <div className="pt-12 font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 uppercase">
          © {new Date().getFullYear()} Godwin Linus. ALL RIGHTS RESERVED.
        </div>
        <div className="pt-0 md:pt-12 flex gap-8">
          <a 
            className="font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 hover:text-[#e5e2e1] uppercase"
            href="">Privacy Policy</a>
          <a 
            className="font-sans text-[10px] tracking-widest text-[#e5e2e1]/50 hover:text-[#e5e2e1] uppercase"
            href="">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
