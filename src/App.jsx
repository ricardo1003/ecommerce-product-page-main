import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <header className="relative flex gap-4 w-full p-6 pl-[56px] items-center justify-between">
          <button
            className="flex items-center absolute left-6 z-[3]"
            onClick={() => {
              navState ? setNavState(false) : setNavState(true);
            }}
          >
            <picture>
              <img
                src="./assets/icon-menu.svg"
                alt="menu"
                className={navState ? "hidden" : "block"}
              />
              <img
                src="./assets/icon-close.svg"
                alt="close"
                className={navState ? "block" : "hidden"}
              />
            </picture>
          </button>
        <nav className={`fixed left-0 font-bold bg-white top-0 p-6 pt-24 w-[225px] z-[2] h-[100vh] ${navState ? "translate-x-[0]" : "-translate-x-[225px]"} transition-transform duration-500`}>
          <ul className="flex flex-col gap-3">
            <li><a href="">Collections</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <div className={`fixed block w-full h-full bg-black/50 top-0 left-0 z-[1] opacity-0 ${navState ? "block opacity-100" : "opacity-0"} transition-all duration-500`}></div>
        <img src="./assets/logo.svg" alt="logo" className="mr-auto" />
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
