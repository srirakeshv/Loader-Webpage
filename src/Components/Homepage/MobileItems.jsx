import React from "react";

const MobileItems = () => {
  const Items = [
    {
      Title: "Home",
    },
    {
      Title: "Services",
    },
    {
      Title: "Comapany",
    },
  ];
  return (
    <div className="w-44 p-3 bg-red-300 absolute top-12 left-5 z-10">
      <ul className="flex flex-col justify-start items-start gap-3 w-full">
        {Items.map((item, index) => (
          <li key={index}>{item.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileItems;
