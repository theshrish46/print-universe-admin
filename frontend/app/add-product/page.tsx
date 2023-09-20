"use client";
import React from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = async (data: {
    productName: string | Blob;
    productDesc: string | Blob;
    price: string | Blob;
    productCat: string | Blob;
    productSlug: string | Blob;
    image: (string | Blob)[];
  }) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("productDesc", data.productDesc);
      formData.append("price", data.price);
      formData.append("productCategory", data.productCat);
      formData.append("productSlug", data.productSlug);
      formData.append("image", data.image[0]);

      const response = await axios.post(
        "http://localhost:8000/product",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Response ", response.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  return (
    <div className="w-2/3 mx-auto my-10 rounded-lg px-6 py-4 shadow-xl">
      <form
        method="POST"
        action={"/product"}
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-stretch gap-2"
      >
        <label htmlFor="productname">Product Name</label>
        <input type="text" id="productname" {...register("productName")} />
        {errors.productName && <p>Please enter a product name</p>}

        <label htmlFor="productdesc">Product Description</label>
        <input type="text" id="productdesc" {...register("productDesc")} />
        {errors.productName && <p>Please enter a product description</p>}

        <label htmlFor="productprice">Product Price</label>
        <input type="text" id="productprice" {...register("productPrice")} />
        {errors.productName && <p>Please enter a product price</p>}

        <label htmlFor="productCat">Product Category</label>
        <input type="text" id="productCat" {...register("productCat")} />
        {errors.productName && <p>Please enter a product category name</p>}

        <label htmlFor="productSlug">Product Slug</label>
        <input type="text" id="productSlug" {...register("productSlug")} />
        {errors.productName && <p>Please enter a product slug</p>}

        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          {...register("image")}
          className="bg-white self-start text-sm"
        />
        {errors.image && <p>Please Upload the image</p>}

        <input type="submit" className="ok" />
      </form>
    </div>
  );
};

export default page;
