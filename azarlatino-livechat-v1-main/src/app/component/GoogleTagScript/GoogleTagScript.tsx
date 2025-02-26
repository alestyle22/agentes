"use client";
import { useEffect } from "react";

// Extender la interfaz Window para incluir dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleTagScript: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Crear y agregar el script de gtag.js al head del documento
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-6WBQ7EMTS0";
      script.async = true;
      document.head.appendChild(script);

      // Configuración de Google Analytics
      window.dataLayer = window.dataLayer || [];

      // Convertir la declaración de función a una expresión de función
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      gtag("js", new Date());
      gtag("config", "G-6WBQ7EMTS0");
    }
  }, []);

  return null; // El componente no renderiza nada
};

export default GoogleTagScript;
