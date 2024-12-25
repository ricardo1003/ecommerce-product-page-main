import { useState } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [navState, setNavState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [cartHidden, setCartHidden] = useState(true)

  const [imgNumber, setImgNumber] = useState(0);

  const [counter, setCounter] = useState(0);

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
          <ul className={`flex-col gap-3 ${navState ? "flex" : "hidden"}`}>
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
        <button
          type="button"
          onClick={() => {
            cartState ? setCartState(false) : setCartState(true);
            cartHidden ? setCartHidden(false) :
            setTimeout(() => {
              setCartHidden(true);
            }, 500);
          }}
        >
          <img src="./assets/icon-cart.svg" alt="cart" />
        </button>
        <a href="" className="max-w-8">
          <img src="./assets/image-avatar.png" alt="user" />
        </a>
      </header>
      <main className="max-w-[100vw] relative">
        <section
          className={`bg-white absolute z-10 left-4 right-4 top-4 rounded-xl flex-col  gap-2 shadow-2xl shadow-black/60 ${cartHidden ? "hidden" : "flex"} ${
            cartState ? "opacity-100 cartAnimation" : "opacity-0 cartAnimationR"
          } transition-all duration-500`}
        > 
          <h3 className="font-bold p-6 pb-2">Cart</h3>
          <div className="w-full h-[1px] bg-black/50" />
          <div className="p-8 h-[200px] flex items-center justify-center">
            <p className="font-bold text-Dark-grayish-blue">
              Your cart is empty.
            </p>
          </div>
        </section>
        <div className="flex justify-between items-center w-full min-h-[375.2px] relative overflow-hidden">
          <button
            type="button"
            className={`block bg-white size-10 z-[5] mx-4 rounded-full ${
              imgNumber <= 0 ? "bg-white/25" : ""
            }`}
            onClick={() => {
              setImgNumber(imgNumber - 1);
            }}
            disabled={imgNumber <= 0 ? true : false}
          >
            <img
              src="./assets/icon-previous.svg"
              alt="previous"
              className="mx-3"
            />
          </button>
          <picture
            className={`absolute flex z-[1]  `}
            style={{
              translate: `${-100 * imgNumber}vw`,
              transitionDuration: "250ms",
            }}
          >
            <img src="./assets/image-product-1.jpg" alt="image-1" />
            <img src="./assets/image-product-2.jpg" alt="image-2" />
            <img src="./assets/image-product-3.jpg" alt="image-3" />
            <img src="./assets/image-product-4.jpg" alt="image-4" />
          </picture>
          <button
            type="button"
            className={`block bg-white size-10 z-[5] mx-4 rounded-full ${
              imgNumber >= 3 ? "bg-white/25" : ""
            }`}
            onClick={() => {
              setImgNumber(imgNumber + 1);
            }}
            disabled={imgNumber >= 3 ? true : false}
          >
            <img src="./assets/icon-next.svg" alt="next" className="mx-4" />
          </button>
        </div>
        <section className="p-4">
          <h3 className="uppercase font-bold text-Dark-grayish-blue">
            sneaker company
          </h3>
          <h2 className="capitalize font-bold text-3xl">
            fall limited edition sneakers
          </h2>
          <p className="text-Dark-grayish-blue my-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <h4 className="text-3xl font-bold w-full flex gap-2">
            $125.00{" "}
            <span className="text-white bg-black rounded-lg text-xl px-2 py-1 mr-auto">
              50%
            </span>{" "}
            <span className="text-xl text-Dark-grayish-blue line-through">
              $250.00
            </span>
          </h4>
          <form action="" className="w-full flex flex-col gap-2 my-8">
            <div className="flex justify-between items-center font-bold bg-Light-grayish-blue h-12 rounded-lg">
              <button
                type="button"
                className="px-8 h-full"
                onClick={(e) => {
                  e.preventDefault, setCounter(counter - 1);
                }}
                disabled={counter ? false : true}
              >
                <img src="./assets/icon-minus.svg" alt="minus" />
              </button>
              {counter}
              <button
                type="button"
                className="px-8 h-full"
                onClick={(e) => {
                  e.preventDefault, setCounter(counter + 1);
                }}
              >
                <img src="./assets/icon-plus.svg" alt="plus" />
              </button>
            </div>
            <button className="bg-Orange h-12 rounded-lg flex items-center justify-center gap-4 font-bold">
              <img
                src="./assets/icon-cart.svg"
                alt="cart"
                className="brightness-0"
              />
              Add to cart
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
