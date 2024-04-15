"use client";

import React, { useEffect, useState } from "react";
import { FeedbackCarousel } from "./global/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased justify-center relative overflow-hidden">
      <FeedbackCarousel
        feedbacks={feedbacks}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

const feedbacks = [
  {
    comment:
      "Absolutely thrilled with my experience! The team delivered exactly what I was looking for and more.",
    rating: 5,
    customerName: "Timothee Bels",
    customerTitle: "CEO, ABC Company",
  },
  {
    comment:
      "I'm satisfied with the quality of the service. However, delivery could have been faster.",
    rating: 4,
    customerName: "Jane Smith",
    customerTitle: "Marketing Manager, XYZ Inc.",
  },
  {
    comment:
      "Exceptional service!The team went above and beyond to deliver outstanding results. Highly recommend!",
    rating: 5,
    customerName: "Bob Johnson",
    customerTitle: "IT Specialist, DEF Corporation",
  },
];
