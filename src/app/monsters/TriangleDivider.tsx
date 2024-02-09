import React from "react";
import Image from "next/image";

export default function TriangleDivider() {
  return (
    <div className="relative h-[6px] w-full">
      <Image
        priority={true}
        src="/assets/redTriangle.png"
        className="object-fill"
        fill={true}
        alt="Red Triangle Divider"
      />
    </div>
  );
}
