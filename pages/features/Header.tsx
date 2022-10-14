import React, { useState } from "react";
import classNames from "classnames";
import HomeIcon from "@mui/icons-material/Home";
import { width } from "@mui/system";

const Header = () => {
  const [isOver, setIsOver] = useState({
    Skills: false,
    Work: false,
    Contact: false,
    Home: false,
  });

  const mouseOver = (e: any) => {
    setIsOver({ ...isOver, [e.target.id]: true });
  };

  const mouseLeave = (e: any) => {
    setIsOver({ ...isOver, [e.target.id]: false });
  };

  const onClickHandler = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <div className="font-sofia font-bold flex justify-between items-center bg-black text-lg p-5">
        <a
          id="Home"
          className={classNames("flex items-center justify-center gap-1", {
            "text-green-1 underline cursor-pointer": isOver.Home,
          })}
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
          onClick={onClickHandler}
        >
          <HomeIcon fontSize="small" />{" "}
          <label className="cursor-pointer">Home page</label>
        </a>
        <div className="flex gap-7">
          <label
            id="Skills"
            className={classNames({
              "text-green-1 underline cursor-pointer": isOver.Skills,
            })}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={onClickHandler}
          >
            Skills
          </label>
          <label
            id="Work"
            className={classNames({
              "text-green-1 underline cursor-pointer": isOver.Work,
            })}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={onClickHandler}
          >
            Work
          </label>
          <label
            id="Contact"
            className={classNames({
              "text-green-1 underline cursor-pointer": isOver.Contact,
            })}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={onClickHandler}
          >
            Contact
          </label>
        </div>
      </div>
      <div className="h-[2px] bg-green-1 w-full"></div>
    </div>
  );
};

export default Header;
