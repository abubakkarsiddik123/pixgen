import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const res = await fetch("https://pixgen-server-q59l.onrender.com/category");
  const categories = await res.json();
  console.log(categories);
  return (
    <div className="my-5 space-x-2">
      {categories.map((category) => (
        <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}><Button size="sm" variant="outline"  >{category.name} </Button></Link>
      ))}
    </div>
  );
};

export default Category;
