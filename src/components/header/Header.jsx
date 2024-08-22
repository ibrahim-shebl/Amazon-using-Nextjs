"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import SearchProducts from "../SearchProducts";

const Header = () => {
  const [allData, setAllData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productData, favoriteData } = useSelector(
    (state) => state.next
  );

  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/tech")
      .then(response => response.json())
      .then(data => {
        setAllData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // تصفية المنتجات بناءً على البحث
    if (Array.isArray(allData)) {
      const filtered = allData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allData]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">EGYPT</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
          {searchQuery && (
            <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <Link
                    key={item._id}
                    className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                    href={{
                      pathname: `${item._id}`,
                      query: {
                        _id: item._id,
                        brand: item.brand,
                        category: item.category,
                        description: item.description,
                        image: item.image,
                        isNew: item.isNew,
                        oldPrice: item.oldPrice,
                        price: item.price,
                        title: item.title,
                      },
                    }}
                    onClick={() => setSearchQuery("")}
                  >
                    <SearchProducts item={item} />
                  </Link>
                ))
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing matches your search keywords. Please try again!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
        <Link href={'/login'}

          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
        >
          <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
        </Link>
        <Link
          href={"/favorite"}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </Link>
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
