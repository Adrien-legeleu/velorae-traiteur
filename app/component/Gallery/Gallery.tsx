"use client";
import { ParallaxScroll } from "@/components/aceternity/parallax-scroll";
import Img1 from "@/public/image/gallery (1).jpg";
import Img2 from "@/public/image/gallery (2).jpg";
import Img3 from "@/public/image/gallery (3).jpg";
import Img4 from "@/public/image/gallery (4).jpg";
import Img5 from "@/public/image/gallery (5).jpg";
import Img6 from "@/public/image/gallery (6).jpg";
import Img7 from "@/public/image/gallery (7).jpg";
import Img8 from "@/public/image/gallery (8).jpg";
import Img9 from "@/public/image/gallery (9).jpg";

export default function Gallery() {
  return (
    <div className="py-20 space-y-20 px-8">
      <h2 className="  mx-auto text-xl md:text-5xl tracking-wider text-neutral-800 dark:text-neutral-200 font-sans">
        Des images valent plus que des mots!
      </h2>
      <ParallaxScroll images={images} />
    </div>
  );
}

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];
