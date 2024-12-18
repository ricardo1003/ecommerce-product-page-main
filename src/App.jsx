import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="flex gap-4 w-full p-6 items-center justify-between">
        <nav>
          <button className="flex items-center">
            <picture>
              <img src="./assets/icon-menu.svg" alt="menu" />
              <img src="./assets/icon-close.svg" alt="close" className="hidden"/>
            </picture>
          </button>
        </nav>
        <img src="./assets/logo.svg" alt="logo" className="mr-auto"/>
        <a href="">
          <img src="./assets/icon-cart.svg" alt="cart" />
        </a>
        <a href="" className="max-w-8">
          <img src="./assets/image-avatar.png" alt="user" />
        </a>
      </header>
      <main></main>
    </>
  );
}

export default App;
