'use client';

import { useEffect } from 'react';

export default function HeroBackground() {
  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        projectDiv.querySelectorAll('*').forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            try { el.remove(); } catch(e) {}
          }
        });
      }
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    [1000, 3000, 5000].forEach(t => setTimeout(hideBranding, t));

    return () => {
      clearInterval(interval);
      try { document.head.removeChild(embedScript); } catch(e) {}
      try { document.head.removeChild(style); } catch(e) {}
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full hidden lg:block">
      <div
        data-us-project="whwOGlfJ5Rz2rHaEUgHl"
        style={{ width: '100%', height: '100%', minHeight: '100vh' }}
      />
    </div>
  );
}
