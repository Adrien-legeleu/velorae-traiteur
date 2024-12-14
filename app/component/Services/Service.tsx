"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { dataService } from "./dataService";

export function Service() {
  const cards = dataService.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-40 px-4">
      <h2 className=" pl-4  mx-auto text-xl md:text-5xl tracking-wider text-neutral-800 dark:text-neutral-200 font-sans">
        Nos services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
