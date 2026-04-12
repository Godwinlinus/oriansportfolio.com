import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-dim">
      <DotLottieReact
        src="https://lottie.host/6be3ded1-9922-49c9-b729-55e72cf57c72/yoy4D2EbmZ.lottie"
        loop
        autoplay
        style={{ width: 100, height: 100 }}
      />
    </div>
  );
}