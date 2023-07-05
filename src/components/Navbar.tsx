import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", fontSize:"20px"}}>
      <div>
        <Link href={"/"}>
          <>Home</>
        </Link>
      </div>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
      <div>
        <Link href={"/profile"}>Profile</Link>
      </div>
      <div>
        <Link href={"/blog"}>Blog</Link>
      </div>
      <div>
        <Link href={"/product"}>Product</Link>
      </div>
    </div>
  );
}
