import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar } from "@mui/material";
import { InfiniteMovingCardsDemo } from "./ratings";

export const Channels = () => {
  const people = [
    {
      logo: "/alpha.jpeg",
      name: "Alpha",
      link: "https://www.youtube.com/@AlphaCentralOfficial",
    },
    {
      logo: "/frazer.jpeg",
      name: "Brookes",
      link: "https://www.youtube.com/@FrazerBrookesChannel",
    },
    {
      logo: "/dan.jpg",
      name: "Dan Kieft",
      link: "https://www.youtube.com/@Dankieft",
    },
    {
      logo: "/joe.jpeg",
      name: "Joe Leech",
      link: "https://www.youtube.com/@Joe_Leech",
    },
  ];
  // Avatar Styles
  const style = {
    width: {
      xs: 50, // width on extra-small devices
      sm: 100, // width on small devices
      md: 150, // default width
    },
    height: {
      xs: 50, // height on extra-small devices
      sm: 100, // height on small devices
      md: 150, // default height
    },
    // You can add more responsive keys (lg, xl) as needed
  };
  return (
    <div className="">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl text-center">
        People we've Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40 mb-0" />
      </div>

      <InfiniteMovingCardsDemo />
    </div>
  );
};
