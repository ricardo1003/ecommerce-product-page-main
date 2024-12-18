import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [navState, setNavState] = useState(false);

  const [imgNumber, setImgNumber] = useState(0)

  return (
    <>
      <header className="relative flex gap-4 w-full p-6 pl-[56px] items-center justify-between">
        <button
          type="button"
          className="flex items-center absolute left-6 z-[13]"
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
        <nav
          className={`fixed left-0 font-bold bg-white top-0 p-6 pt-24 w-[225px] z-[12] h-[100vh] ${
            navState ? "translate-x-[0]" : "-translate-x-[225px]"
          } transition-transform duration-500`}
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={`fixed block w-full h-full bg-black/50 top-0 left-0 z-[11] opacity-0 ${
            navState ? "block opacity-100" : "opacity-0 hidden"
          } transition-all duration-500`}
        ></div>
        <img src="./assets/logo.svg" alt="logo" className="mr-auto" />
        <a href="">
          <img src="./assets/icon-cart.svg" alt="cart" />
        </a>
        <a href="" className="max-w-8">
          <img src="./assets/image-avatar.png" alt="user" />
        </a>
      </header>
      <main className="max-w-[100vw]">
        <div className="flex justify-between items-center w-full min-h-[375.2px] relative overflow-hidden" >
          <button type="button" className={`block bg-white size-10 z-[5] mx-4 rounded-full ${(imgNumber <= 0) ? "bg-white/25" : ""}`} onClick={()=>{setImgNumber(imgNumber - 1)}} disabled={(imgNumber <= 0) ? true : false}>
            <img src="./assets/icon-previous.svg" alt="previous" className="mx-3" />
          </button>
          <picture className={`absolute flex z-[1]  `} style={{translate: `${-100 * imgNumber}vw`, transitionDuration:"250ms"}}>
            <img src="./assets/image-product-1.jpg" alt="image-1" />
            <img src="./assets/image-product-2.jpg" alt="image-2" />
            <img src="./assets/image-product-3.jpg" alt="image-3" />
            <img src="./assets/image-product-4.jpg" alt="image-4" />
          </picture>
          <button type="button" className={`block bg-white size-10 z-[5] mx-4 rounded-full ${(imgNumber >= 3) ? "bg-white/25" : ""}`} onClick={()=>{setImgNumber(imgNumber + 1)}} disabled={(imgNumber >= 3) ? true : false}>
            <img src="./assets/icon-next.svg" alt="next" className="mx-4" />
          </button>
        </div>
        <section></section>
      </main>
    </>
  );
}

export default App;
