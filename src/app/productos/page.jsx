"use client";
import { useState, useEffect } from "react";
const datos = require("@/mockups/products.json");

function Productos() {
  const [products, setProducts] = useState(datos);
  const [labelOption, setLabelOption] = useState("");
  const [categoryOption, setCategoryOption] = useState("");
  const [priceRange, setPriceRange] = useState(100);

  const getColorByState = (state) => {
    switch (state) {
      case "Disponible":
        return "text-green-700";
      case "Agotado":
        return "text-red-700";
    }
  };

  const filterByPrice = () => {
    var filterProducts = datos.filter((product) => {
      var price_num = product.price.split("$");
      var price = parseFloat(price_num[1]);

      if (categoryOption && !labelOption)
        return (
          price <= priceRange &&
          product.name.toLowerCase().includes(categoryOption.toLowerCase())
        );
      else if (!categoryOption && labelOption)
        return (
          price <= priceRange &&
          product.state.toLowerCase().includes(labelOption.toLowerCase())
        );
      else if (categoryOption && labelOption)
        return (
          price <= priceRange &&
          product.state.toLowerCase().includes(labelOption.toLowerCase()) &&
          product.name.toLowerCase().includes(categoryOption.toLowerCase())
        );
      else if (!categoryOption && !labelOption) return price <= priceRange;
    });
    setProducts(filterProducts);
  };

  //use effect para actualizar la lista de products cada vez que cambie el estado de labelOption
  useEffect(() => {
    var filteredProducts = [];
    if (!categoryOption) {
      filteredProducts = datos.filter((product) =>
        product.state.toLowerCase().includes(labelOption.toLowerCase()),
      );
    } else {
      filteredProducts = datos.filter(
        (product) =>
          product.state.toLowerCase().includes(labelOption.toLowerCase()) &&
          product.name.toLowerCase().includes(categoryOption.toLowerCase()),
      );
    }

    filteredProducts = filteredProducts.filter((product) => {
      var price_num = product.price.split("$");
      var price = parseFloat(price_num[1]);
      return price <= priceRange;
    });

    setProducts(filteredProducts);
  }, [labelOption]);

  //use effect para actualizar la lista de products cada vez que cambie el estado de categoryOption
  useEffect(() => {
    var filteredProducts = [];
    if (!labelOption) {
      filteredProducts = datos.filter((product) =>
        product.name.toLowerCase().includes(categoryOption.toLowerCase()),
      );
    } else {
      filteredProducts = datos.filter(
        (product) =>
          product.name.toLowerCase().includes(categoryOption.toLowerCase()) &&
          product.state.toLowerCase().includes(labelOption.toLowerCase()),
      );
    }

    filteredProducts = filteredProducts.filter((product) => {
      var price_num = product.price.split("$");
      var price = parseFloat(price_num[1]);
      return price <= priceRange;
    });
    setProducts(filteredProducts);
  }, [categoryOption]);

  return (
    <div className="container mx-auto mt-8 flex flex-col py-16 md:flex-row">
      <aside className="relative mx-4 mt-4 flex h-fit flex-col justify-between rounded-3xl bg-white bg-opacity-70 shadow-md backdrop-blur-lg backdrop-filter md:mx-0 md:w-1/4">
        <div className="p-6">
          <h1 className="mb-4 text-xl font-bold text-gray-700">
            FILTROS DE BUSQUEDA
          </h1>
          <nav className="space-y-2">
            <div className="flex flex-col items-start p-2 text-gray-700">
              <span>Marca</span>

              {/* Radio button para marca */}
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="rbLabel"
                    value={"Disponible"}
                    checked={labelOption === "Disponible"}
                    onChange={(e) => setLabelOption(e.target.value)}
                    onClick={(e) => {
                      if (e.target.value === labelOption) {
                        setLabelOption("");
                      }
                    }}
                  />
                  Disponible
                </label>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="rbLabel"
                    value={"Agotado"}
                    checked={labelOption === "Agotado"}
                    onChange={(e) => setLabelOption(e.target.value)}
                    onClick={(e) => {
                      if (e.target.value === labelOption) {
                        setLabelOption("");
                      }
                    }}
                  />
                  Agotado
                </label>
              </div>
            </div>

            <div className="flex flex-col p-2 text-gray-700">
              <span>Categoría</span>

              {/* Radio button para categoria */}
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="rbCategory"
                    value={"Aceite Esencial de Aromaterapia"}
                    checked={
                      categoryOption === "Aceite Esencial de Aromaterapia"
                    }
                    onChange={(e) => setCategoryOption(e.target.value)}
                    onClick={(e) => {
                      if (e.target.value === categoryOption) {
                        setCategoryOption("");
                      }
                    }}
                  />
                  Aceite Esencial de Aromaterapia
                </label>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="rbCategory"
                    value={"Mascarilla Facial de Spa"}
                    checked={categoryOption === "Mascarilla Facial de Spa"}
                    onChange={(e) => setCategoryOption(e.target.value)}
                    onClick={(e) => {
                      if (e.target.value === categoryOption) {
                        setCategoryOption("");
                      }
                    }}
                  />
                  Mascarilla Facial de Spa
                </label>
              </div>
            </div>

            <hr className="my-2 border-gray-300" />
            <div className="flex flex-col p-2 text-gray-700">
              <span>Precio</span>
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="h-2 w-full"
                />
                <div>Hasta: {priceRange} $</div>
                <div>
                  <button onClick={() => filterByPrice()}>
                    <span className="font-bold text-blue-400">Aplicar</span>
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-2 border-gray-300" />
            {/* // boton para resetear el valor de labelOption */}
            <button
              className="rounded bg-gray-100 px-4 py-2 font-bold text-gray-700 hover:bg-gray-200"
              onClick={() => {
                setPriceRange(100);
                setLabelOption("");
                setCategoryOption("");
                setProducts(datos);
              }}
            >
              Borrar filtros
            </button>
          </nav>
        </div>
      </aside>

      <main className="md:w-3/4">
        <div className="relative mx-4 mt-4 grid max-w-5xl grid-cols-1 gap-3 scroll-smooth text-gray-800 md:grid-cols-2 lg:grid-cols-3">
          {products.map((producto, index) => {
            return (
              <article
                key={index}
                className="group mb-6 transform cursor-pointer rounded-2xl border bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative mb-4 aspect-[10/5]">
                  <img
                    className="max-h-80 w-full transform rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                    src={
                      "https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt={`GreaseIbarra-${producto.name}`}
                  />

                  <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`h-5 w-5 ${getColorByState(producto.state)}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="8" r="4"></circle>
                    </svg>
                    <span className="ml-1 text-sm text-slate-400">
                      {producto.state}
                    </span>
                  </div>
                </div>

                <div className="mb-auto flex w-full justify-center pb-4">
                  <div className="items-center justify-center text-center text-xl">
                    <p className="font-semibold">{producto.name}</p>
                    <p className="text-gray-500">{producto.price}</p>
                  </div>
                </div>

                <h3 className=" text-center text-sm font-medium leading-6 text-gray-800">
                  {producto.short_description}
                </h3>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Productos;
