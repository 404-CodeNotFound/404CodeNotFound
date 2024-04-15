import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const FeedbackCarousel = ({
  feedbacks,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  feedbacks: {
    comment: string;
    rating: number;
    customerName: string;
    customerTitle: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  useEffect(() => {
    getDirection();
    getSpeed();
  }, [direction, speed]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "feedback-carousel relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {feedbacks.map((feedback, idx) => (
          <li
            className="feedback-card w-[350px] max-w-full relative rounded-2xl border-b-0 flex-shrink-0 border border-gray-800 px-8 py-6 md:w-[450px] bg-slate-900"
            key={idx}
          >
            <blockquote>
              <div className="relative z-20 flex flex-row items-center mt-0">
                <span className="flex flex-col">
                  <span className=" text-gray-400 font-normal text-base">
                    {feedback.customerName}
                  </span>
                  {/* <span className="text-sm text-gray-400 font-normal">
                    {feedback.customerTitle}
                  </span> */}
                  <div className="flex">{renderStars(feedback.rating)}</div>
                </span>
              </div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal text-right">
                {feedback.comment}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
