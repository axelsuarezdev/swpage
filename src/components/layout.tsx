import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export default function Layout({children}){
    // Los puntitos que simulan las estrellas del fondo
    const svgBackground = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      ${Array.from({ length: 100 }).map(
        (_, index) =>
          `<circle 
            cx="${Math.random() * 100}%" 
            cy="${Math.random() * 100}%" 
            r="${Math.random() * 2}" 
            fill="white" 
            style="
              animation: pulse ${Math.random() * 6 + 3}s infinite alternate, 
                         fade ${Math.random() * 6 + 3}s infinite alternate;
              animation-delay: ${Math.random() * 3}s;
            "
          />`
      ).join('\n')}
      <style>
        @keyframes pulse {
          from { r: 0; }
          to { r: 2; }
        }
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      </style>
    </svg>
  `;
    return (
            <div className="h-screen bg-black flex flex-col justify-between" style={{
                backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
                    svgBackground
                )}")`,
                backgroundRepeat: "repeat",
                backgroundSize: "100% 100%",
                backgroundColor: "#1a1a1a",
                height: "auto",
                minHeight: "100vh"
                }}>
            <Header/>
            <main className="h-3/4 content-center min-h-80">{children}</main>
            <Footer/>
            </div>
    )
}