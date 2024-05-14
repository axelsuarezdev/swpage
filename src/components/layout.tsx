import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export default function Layout({children}){
    // Los puntitos que simulan las estrellas del fondo
    const svgBackground = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      ${Array.from({ length: 100 }).map(
        (_, index) =>
          `<circle cx="${Math.random() * 100}%" cy="${Math.random() *
            100}%" r="1" fill="white" />`
      ).join('\n')}
    </svg>
  `;
    return (<div className="h-screen bg-black" style={{
        backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            svgBackground
          )}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "100% 100%",
          backgroundColor: "#1a1a1a",
    }}>
    <Header/>
    <main className="h-3/4">{children}</main>
    <Footer/>
    </div>)
}