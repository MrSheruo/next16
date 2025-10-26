"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExploreButton() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto hover:scale-95 transition-transform"
      onClick={() => {
        console.log("hi");
      }}
    >
      <Link href={"#events"}>
        Explore Events
        <Image
          alt="arrow-down"
          src="/icons/arrow-down.svg"
          width={24}
          height={24}
        />
      </Link>
    </button>
  );
}
