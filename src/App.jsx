import { useState, useEffect } from "react";
import reactLogo from "/assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [navState, setNavState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [cartHidden, setCartHidden] = useState(true);
  const [divHidden, setDivHidden] = useState(true);
  const [lightbox, toggleLightbox] = useState(false);

  const [imgNumber, setImgNumber] = useState(0);

  const [counter, setCounter] = useState(0);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="relative flex gap-4 w-full pr-6 pl-[56px] sm:px-20 items-center justify-between sm:border-b-[1px] border-black/25 h-20">
        <button
          type="button"
          className="flex items-center absolute left-6 z-[13] md:hidden"
          onClick={() => {
            navState ? setNavState(false) : setNavState(true);
            divHidden ? setDivHidden(false) : "";
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
        <img src="./assets/logo.svg" alt="logo" className="mr-auto md:mr-0" />
        <nav
          className={`fixed left-0 font-bold bg-white top-0 p-6 pt-24 w-[225px] z-[12] h-[100vh] ${
            navState ? "translate-x-[0]" : "-translate-x-[225px]"
          } transition-transform duration-500 md:relative md:size-auto md:p-0 md:left-auto md:translate-x-[0] md:text-Dark-grayish-blue md:font-normal md:mr-auto md:h-full`}
        >
          <ul
            className={`flex-col gap-3 ${
              navState ? "flex" : "hidden"
            } md:flex md:items-center md:flex-row md:h-full md:relative`}
          >
            <li className="md:relative md:h-full">
              <a
                href=""
                className="md:h-full flex items-center before:md:hidden hover:md:before:block before:bg-Orange before:absolute before:bottom-0 before:w-full before:h-1 "
              >
                Collections
              </a>
            </li>
            <li className="md:relative md:h-full">
              <a
                href=""
                className="md:h-full flex items-center before:md:hidden hover:md:before:block before:bg-Orange before:absolute before:bottom-0 before:w-full before:h-1 "
              >
                Men
              </a>
            </li>
            <li className="md:relative md:h-full">
              <a
                href=""
                className="md:h-full flex items-center before:md:hidden hover:md:before:block before:bg-Orange before:absolute before:bottom-0 before:w-full before:h-1 "
              >
                Women
              </a>
            </li>
            <li className="md:relative md:h-full">
              <a
                href=""
                className="md:h-full flex items-center before:md:hidden hover:md:before:block before:bg-Orange before:absolute before:bottom-0 before:w-full before:h-1 "
              >
                About
              </a>
            </li>
            <li className="md:relative md:h-full">
              <a
                href=""
                className="md:h-full flex items-center before:md:hidden hover:md:before:block before:bg-Orange before:absolute before:bottom-0 before:w-full before:h-1 "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`fixed block w-full h-full bg-black/50 top-0 left-0 z-[11]  ${
            navState ? "fadingDivIn" : "fadingDivOut"
          } ${
            navState
              ? ""
              : setTimeout(() => {
                  "hidden";
                }, 500)
          } transition-all duration-500`}
        ></div>
        <button
          className="relative"
          type="button"
          onClick={() => {
            cartState ? setCartState(false) : setCartState(true);
            cartHidden
              ? setCartHidden(false)
              : setTimeout(() => {
                  setCartHidden(true);
                }, 500);
          }}
        >
          <p
            className={
              !counter
                ? "hidden"
                : `flex bg-Orange absolute text-white rounded-full font-bold -top-3 -right-3 px-2 text-sm`
            }
          >
            {counter}
          </p>
          <img src="./assets/icon-cart.svg" alt="cart" />
        </button>
        <a href="" className="max-w-8">
          <img src="./assets/image-avatar.png" alt="user" />
        </a>
      </header>
      <main className="max-w-[100vw] relative block sm:flex sm:flex-col sm:px-[120px] sm:items-center sm:my-auto sm:py-32 sm:gap-[5vw] lg:flex-row">
        <section
          className={`bg-white absolute z-10 left-4 right-4 top-4 rounded-xl flex-col  gap-2 shadow-2xl shadow-black/60 ${
            cartHidden ? "hidden" : "flex"
          } ${
            cartState ? "opacity-100 cartAnimation" : "opacity-0 cartAnimationR"
          } transition-all duration-500 sm:max-w-[400px] sm:left-auto sm:right-16`}
        >
          <h3 className="font-bold p-6 pb-2">Cart</h3>
          <div className="w-full h-[1px] bg-black/50" />
          <div
            className={`p-8 h-[200px] flex items-center justify-center ${
              counter ? "flex-col justify-between gap-4" : ""
            }`}
          >
            <p
              className={`font-bold mx-[50px] text-Dark-grayish-blue ${
                counter ? "hidden" : ""
              }`}
            >
              Your cart is empty.
            </p>
            <ol className={!counter ? "hidden" : ""}>
              <li className="flex w-full justify-between gap-2">
                <img
                  src="./assets/image-product-1-thumbnail.jpg"
                  alt="thumbnail"
                  className="max-h-full max-w-full h-[60px] rounded-md"
                />
                <div className="flex flex-col text-Dark-grayish-blue">
                  <p className="capitalize">fall limited edition sneakers</p>
                  <p>
                    $125.00 x {counter}
                    <b className="text-black"> ${125 * counter}.00</b>
                  </p>
                </div>
                <button
                  className="w-[10%]"
                  onClick={(e) => {
                    e.preventDefault, setCounter(0);
                  }}
                >
                  <img
                    src="./assets/icon-delete.svg"
                    alt="delete"
                    className="w-full"
                  />
                </button>
              </li>
            </ol>
            <button
              className={
                !counter
                  ? "hidden"
                  : "bg-Orange w-full h-10 rounded-md font-bold "
              }
            >
              Checkout
            </button>
          </div>
        </section>
        <div className="flex justify-between items-center w-full min-h-[375.2px] relative  sm:flex-col sm:max-w-[350px] lg:max-w-[31vw]">
          <section
            className={`${
              lightbox && viewportWidth >= 640 ? `sm:flex` : `hidden`
            } fixed w-[100vw] h-[100vh] top-0 left-0 bg-black/25 z-[25] items-center justify-center`}
          >
            <div className={`flex flex-col max-w-[600px]`}>
              <button className="self-end" onClick={(e)=>{e.preventDefault, toggleLightbox(false)}}>
                <img src="./assets/icon-close.svg" alt="closeLightbox" />
              </button>
              <div className="flex flex-row items-center relative">
                <button
                  type="button"
                  className={`hidden sm:block bg-white size-10 z-[5] mx-4 rounded-full absolute ${
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
                <div className="overflow-hidden h-min aspect-square max-w-[600px] w-[71.42857142857143vw] rounded-xl">
                  <picture
                    className="flex"
                    style={{
                      translate: `${(viewportWidth >= 870) ? -600 * imgNumber + "px" : (-500/7 * imgNumber) + "vw" }`,
                      transitionDuration: "250ms",
                    }}
                  >
                    <img
                      src="./assets/image-product-1.jpg"
                      alt="product-1"
                      className="sm:max-h-full"
                    />
                    <img
                      src="./assets/image-product-2.jpg"
                      alt="product-2"
                      className="sm:max-h-full"
                    />
                    <img
                      src="./assets/image-product-3.jpg"
                      alt="product-3"
                      className="sm:max-h-full"
                    />
                    <img
                      src="./assets/image-product-4.jpg"
                      alt="product-4"
                      className="sm:max-h-full"
                    />
                  </picture>
                </div>
                <button
                  type="button"
                  className={`hidden sm:block bg-white size-10 z-[5] mx-4 rounded-full absolute right-0 ${
                    imgNumber >= 3 ? "bg-white/25" : ""
                  }`}
                  onClick={() => {
                    setImgNumber(imgNumber + 1);
                  }}
                  disabled={imgNumber >= 3 ? true : false}
                >
                  <img
                    src="./assets/icon-next.svg"
                    alt="next"
                    className="mx-4"
                  />
                </button>
              </div>
              <nav className="hidden sm:block">
                <ol className="flex">
                  <li className="p-3 rounded-md pt-6 pl-0">
                    <div className="flex bg-white rounded-xl h-min">
                      <button
                        className={`rounded-xl overflow-hidden hover:opacity-50 backdrop-brightness-0 backdrop-invert ${
                          imgNumber === 0
                            ? "outline outline-3 outline-Orange"
                            : "outline-none"
                        }`}
                        onClick={(e) => {
                          e.preventDefault, setImgNumber(0);
                        }}
                      >
                        <img
                          src="./assets/image-product-1-thumbnail.jpg"
                          alt="thumbnail"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="p-3 rounded-md pt-6">
                    <div className="flex bg-white rounded-xl h-min">
                      <button
                        className={`rounded-xl overflow-hidden hover:opacity-50 backdrop-brightness-0 backdrop-invert ${
                          imgNumber === 1
                            ? "outline outline-3 outline-Orange"
                            : "outline-none"
                        }`}
                        onClick={(e) => {
                          e.preventDefault, setImgNumber(1);
                        }}
                      >
                        <img
                          src="./assets/image-product-2-thumbnail.jpg"
                          alt="thumbnail"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="p-3 rounded-md pt-6">
                    <div className="flex bg-white rounded-xl h-min">
                      <button
                        className={`rounded-xl overflow-hidden hover:opacity-50 backdrop-brightness-0 backdrop-invert ${
                          imgNumber === 2
                            ? "outline outline-3 outline-Orange"
                            : "outline-none"
                        }`}
                        onClick={(e) => {
                          e.preventDefault, setImgNumber(2);
                        }}
                      >
                        <img
                          src="./assets/image-product-3-thumbnail.jpg"
                          alt="thumbnail"
                        />
                      </button>
                    </div>
                  </li>
                  <li className="p-3 rounded-md pt-6 pr-0">
                    <div className="flex bg-white rounded-xl h-min">
                      <button
                        className={`rounded-xl overflow-hidden hover:opacity-50 backdrop-brightness-0 backdrop-invert ${
                          imgNumber === 3
                            ? "outline outline-3 outline-Orange"
                            : "outline-none"
                        }`}
                        onClick={(e) => {
                          e.preventDefault, setImgNumber(3);
                        }}
                      >
                        <img
                          src="./assets/image-product-4-thumbnail.jpg"
                          alt="thumbnail"
                        />
                      </button>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </section>
          <button
            type="button"
            className={`sm:hidden block bg-white size-10 z-[5] mx-4 rounded-full ${
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
          <div
            className="sm:rounded-xl absolute sm:relative overflow-hidden w-full h-min cursor-pointer"
            onClick={() => toggleLightbox(true)}
          >
            <picture
              className={`absolute flex z-[1] sm:rounded-xl sm:relative sm:aspect-square sm:max-h-[350px] lg:h-[31vw] lg:max-h-[31vw] `}
              style={{
                translate: `${
                  viewportWidth < 640
                    ? -100 * imgNumber + "vw"
                    : viewportWidth >= 1024
                    ? -31 * imgNumber + "vw"
                    : -350 * imgNumber + "px"
                }`,
                transitionDuration: "250ms",
              }}
            >
              <img
                src="./assets/image-product-1.jpg"
                alt="image-1"
                className="sm:max-h-full"
              />
              <img
                src="./assets/image-product-2.jpg"
                alt="image-2"
                className="sm:max-h-full"
              />
              <img
                src="./assets/image-product-3.jpg"
                alt="image-3"
                className="sm:max-h-full"
              />
              <img
                src="./assets/image-product-4.jpg"
                alt="image-4"
                className="sm:max-h-full"
              />
            </picture>
          </div>
          <button
            type="button"
            className={`sm:hidden block bg-white size-10 z-[5] mx-4 rounded-full ${
              imgNumber >= 3 ? "bg-white/25" : ""
            }`}
            onClick={() => {
              setImgNumber(imgNumber + 1);
            }}
            disabled={imgNumber >= 3 ? true : false}
          >
            <img src="./assets/icon-next.svg" alt="next" className="mx-4" />
          </button>
          <nav className="hidden sm:block">
            <ol className="flex">
              <li className="p-3 rounded-md pt-6 pl-0">
                <button
                  className={`rounded-xl overflow-hidden hover:opacity-50 ${
                    imgNumber === 0
                      ? "outline outline-3 outline-Orange"
                      : "outline-none"
                  }`}
                  onClick={(e) => {
                    e.preventDefault, setImgNumber(0);
                  }}
                >
                  <img
                    src="./assets/image-product-1-thumbnail.jpg"
                    alt="thumbnail"
                  />
                </button>
              </li>
              <li className="p-3 rounded-md pt-6">
                <button
                  className={`rounded-xl overflow-hidden hover:opacity-50 ${
                    imgNumber === 1
                      ? "outline outline-3 outline-Orange"
                      : "outline-none"
                  }`}
                  onClick={(e) => {
                    e.preventDefault, setImgNumber(1);
                  }}
                >
                  <img
                    src="./assets/image-product-2-thumbnail.jpg"
                    alt="thumbnail"
                  />
                </button>
              </li>
              <li className="p-3 rounded-md pt-6">
                <button
                  className={`rounded-xl overflow-hidden hover:opacity-50 ${
                    imgNumber === 2
                      ? "outline outline-3 outline-Orange"
                      : "outline-none"
                  }`}
                  onClick={(e) => {
                    e.preventDefault, setImgNumber(2);
                  }}
                >
                  <img
                    src="./assets/image-product-3-thumbnail.jpg"
                    alt="thumbnail"
                  />
                </button>
              </li>
              <li className="p-3 rounded-md pt-6 pr-0">
                <button
                  className={`rounded-xl overflow-hidden hover:opacity-50 ${
                    imgNumber === 3
                      ? "outline outline-3 outline-Orange"
                      : "outline-none"
                  }`}
                  onClick={(e) => {
                    e.preventDefault, setImgNumber(3);
                  }}
                >
                  <img
                    src="./assets/image-product-4-thumbnail.jpg"
                    alt="thumbnail"
                  />
                </button>
              </li>
            </ol>
          </nav>
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
          <div className="flex sm:flex-col sm:gap-4">
            <h4 className="text-3xl font-bold w-full flex gap-2">
              $125.00{" "}
              <span className="text-white bg-black rounded-lg text-xl px-2 py-1 mr-auto">
                50%
              </span>{" "}
            </h4>
            <p className="text-xl text-Dark-grayish-blue line-through">
              $250.00
            </p>
          </div>
          <form
            action=""
            className="w-full flex flex-col gap-2 my-8 sm:flex-row sm:justify-between"
          >
            <div className="flex justify-between items-center font-bold bg-Light-grayish-blue h-12 rounded-lg relative">
              <button
                type="button"
                className="w-full h-full flex justify-center items-center hover:opacity-50"
                onClick={(e) => {
                  e.preventDefault, setCounter(counter - 1);
                }}
                disabled={counter ? false : true}
              >
                <img
                  src="./assets/icon-minus.svg"
                  alt="minus"
                  className="w-4 ml-8 mr-10"
                />
              </button>
              {counter}
              <button
                type="button"
                className="w-full h-full flex justify-center items-center hover:opacity-50"
                onClick={(e) => {
                  e.preventDefault, setCounter(counter + 1);
                }}
              >
                <img
                  src="./assets/icon-plus.svg"
                  alt="plus"
                  className="w-4 mr-8 ml-10"
                />
              </button>
            </div>
            <button
              type="button"
              className="bg-Orange h-12 rounded-lg flex items-center justify-center gap-4 font-bold sm:w-full hover:bg-Orange/50"
              onClick={(e) => {
                e.preventDefault, setCounter(counter + 1);
              }}
            >
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
