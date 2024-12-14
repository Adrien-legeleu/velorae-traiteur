import Image from "next/image";
import ImgLanding from "@/public/image/landingImg.png";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="h-screen w-full p-8 justify-between flex items-end">
      <div className="flex flex-col items-start gap-4">
        <Button className="bg-[#6C5B3E] text-lg  p-6 rounded-full text-white hover:bg-[#584b33]">
          Nous contacter !
        </Button>

        <h1 className="text-6xl tracking-widest leading-[4.8rem]">
          Bousculer <br /> les incertitudes
        </h1>
      </div>
      <Image
        src={ImgLanding}
        width={500}
        height={500}
        alt="velorae image"
        className="relative right-16 top-5"
      />
    </div>
  );
}
