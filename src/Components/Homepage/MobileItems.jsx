import React, { useState } from "react";

const MobileItems = () => {
  const [active, setactive] = useState({ overall: false, index: null });
  const [mainactive, setmainactive] = useState(true);

  const Items = [
    {
      Title: "Home",
    },
    {
      Title: "Services",
      submenu: [
        {
          name: "Back",
          path: "",
        },
        {
          name: "Who We Are",
          path: "",
        },
        {
          name: "What We Do",
          path: "",
        },
      ],
    },
    {
      Title: "Comapany",
      submenu: [
        {
          name: "Back",
          path: "",
        },
        {
          name: "company 1",
          path: "hello",
        },
        {
          name: "company 2",
          path: "d",
        },
      ],
    },
  ];

  const handleclick = (index) => {
    if (index === 0) {
    } else {
      setactive({ overall: !active.overall, index });
      setmainactive(false);
    }
  };

  const handlesubmenuclick = (index) => {
    setactive(index === 0 ? { overall: false } : null);
    setmainactive(true);
  };

  return (
    <div className="w-44 p-3 bg-red-500 absolute top-12 left-12 z-10">
      {mainactive && (
        <ul className="flex flex-col justify-start items-start gap-3 w-full">
          {Items.map((item, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => handleclick(index)}
            >
              {item.Title}
            </li>
          ))}
        </ul>
      )}
      {active.overall && (
        <ul className="bg-rose-300">
          {Items[active.index].submenu &&
            Items[active.index].submenu.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="cursor-pointer"
                onClick={() => handlesubmenuclick(subIndex)}
              >
                {subItem.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MobileItems;
