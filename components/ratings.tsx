"use client";

import React, { useEffect, useState } from "react";
import { FeedbackCarousel } from "./global/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased justify-center relative overflow-hidden">
      <FeedbackCarousel feedbacks={feedbacks} direction="right" speed="slow" />
    </div>
  );
}

const feedbacks = [
  {
    comment: "Excellent service! The product exceeded my expectations.",
    rating: 5,
    customerName: "John Doe",
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
      "The product is good, but I encountered some issues during setup. Customer support was helpful in resolving them.",
    rating: 3,
    customerName: "Bob Johnson",
    customerTitle: "IT Specialist, DEF Corporation",
  },
  {
    comment:
      "Disappointed with the product. It didn't meet my expectations, and customer support was unresponsive.",
    rating: 2,
    customerName: "Emily Brown",
    customerTitle: "Freelancer",
  },
  {
    comment:
      "Terrible experience! The product arrived damaged, and it took forever to get a refund.",
    rating: 1,
    customerName: "Michael Wilson",
    customerTitle: "Small Business Owner",
  },
];
