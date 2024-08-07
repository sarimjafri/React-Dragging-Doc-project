import React, { useRef, useState } from "react";
import Card from "./card";



function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Hey there I learnt alot from making this project",
      fileSize: "9mb",
      close: false,
      tagg: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Hey there I learnt alot from making this project",
      fileSize: "9mb",
      close: false,
      tagg: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Hey there I learnt alot from making this project",
      fileSize: "9mb",
      close: false,
      tagg: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "red",
      },
    },
  ];

  return (
    <div ref= {ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
