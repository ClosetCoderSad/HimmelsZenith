import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-4 sm:pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex gap-2 sm:gap-12 flex-col sm:flex-row">
        {" "}
        {/* -------- Product Row ---------- */}
        {/* -------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-start gap-3 sm:gap-0 sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="sm:mt-5 mt-2 text-xl sm:text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="sm:mt-5 mt-2 text-sm sm:text-base text-text_1 md:w-4/5">
            {productData.description}
          </p>
          {/*---Size---*/}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2"> 
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 text-black ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
           {/* Select Color */}
           <div className="flex flex-col gap-4 my-8">
            <p>Select Color</p>
            <div className="flex gap-2">
              {productData.colors.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setColor(item)}
                  className={`w-8 h-8 rounded-full border ${item === color ? "border-orange-500" : ""}`}
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
          </div>
          {/*----Add to Cart----*/}
          <button
            onClick={() => addToCart(productData._id, size, color)}
            className="bg-color text-background px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-text_1 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col space-y-1">
        <p className="font-semibold sm:text-base text-sm">
          Measurements of {productData.name} (in inches):
        </p>
        <p className="text-text_1">M : Length-27 | Chest- 40</p>
        <p className="text-text_1">L : Length-28 | Chest- 42</p>
        <p className="text-text_1">XL : Length-39 | Chest- 44</p>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        excludeId={productData._id}
      />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;






































































           {/* Select Color 
           <div className="flex flex-col gap-4 my-8">
            <p>Select Color</p>
            <div className="flex gap-2">
              {productData.colors.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setColor(item)}
                  className={`w-8 h-8 rounded-full border ${item === color ? "border-orange-500" : ""}`}
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
          </div>
          
          Quantity Controls 
          <div className="flex items-center gap-4 my-8">
            <button
              onClick={decrementQuantity}
              className="bg-gray-100 p-2 rounded-full text-black"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-gray-100 p-2 rounded-full text-black"
            >
              +
            </button>
          </div>
          ADD TO CART
          <button
            onClick={() => {
              addToCart(productData._id, size, color, quantity)
              updateQuantity(productData._id, size, color, quantity); 
            }
          }
            className="bg-color text-background px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>*/}
