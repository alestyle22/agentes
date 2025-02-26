"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const ChatwootScript: React.FC = () => {
  useEffect(() => {
    (function (d, t) {
      const BASE_URL = "https://vibeline.io";
      const g = d.createElement(t) as HTMLScriptElement;
      const s = d.getElementsByTagName(t)[0];

      g.src = `${BASE_URL}/packs/js/sdk.js`;
      g.defer = true;
      g.async = true;
      s.parentNode?.insertBefore(g, s);

      
      g.onload = function () {
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_TOKEN as string,
            baseUrl: BASE_URL,
          });

          setTimeout(() => {
            if (window.$chatwoot) {
              window.$chatwoot.toggle();
            }
          }, 1000); // Abre el chat después de 1 segundo
        }
      };

      // Añadir un evento de clic al elemento del chat si está disponible
      setTimeout(() => {
        const chatButton = document.querySelector(".woot-widget-holder");
        if (chatButton) {
          chatButton.addEventListener("click", () => {
            if (typeof window !== "undefined") {
              // Tracking de Vercel
              track("Chatbot Clicked", {
                category: "Chat",
                label: "Chatwoot",
              });
            }
          });
        }
      }, 1000);
    })(document, "script");
  }, []);

  return null;
};

export default ChatwootScript;
