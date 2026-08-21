"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";

export default function MiniFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("site-footer");
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px",
      threshold: 0,
    });
    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 hidden justify-center px-6 transition-all duration-300 ease-out md:flex",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      )}
    >
      <div className="mb-4 flex items-center gap-4 rounded-full border border-orange-300/30 bg-ink/95 px-6 py-3 shadow-[0_8px_28px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04),0_0_24px_rgba(255,80,17,0.18)] backdrop-blur">
        <Image
          src="/brand/logo-wordmark-white.png"
          alt="SPLASH"
          width={90}
          height={34}
          className="h-5 w-auto"
        />
        <span className="h-4 w-px bg-white/15" />
        <p className="text-xs font-medium tracking-wide text-white/60">
          Un projet porté par{" "}
          <span className="text-white/85">Skillcamp × Bemotion × Reset</span>
        </p>
      </div>
    </div>
  );
}
