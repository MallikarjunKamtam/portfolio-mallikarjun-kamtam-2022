import React, { useState } from "react";
import classNames from "classnames";
import HomeIcon from "@mui/icons-material/Home";
import { width } from "@mui/system";
import { useRouter } from "next/router";
const Header = () => {
  const [isOver, setIsOver] = useState({
    Skills: false,
    Work: false,
    ReachME: false,
    Home: false,
  });
  const router = useRouter();

  const mouseOver = (e: any) => {
    setIsOver({ ...isOver, [e.target.id]: true });
  };

  const mouseLeave = (e: any) => {
    setIsOver({ ...isOver, [e.target.id]: false });
  };

  const onClickHandler = (e: any) => {
    if (e.target.outerText === "Skills") {
      router.push("/skills");
    }
    if (e.target.outerText === "Home page") {
      router.push("/");
    }
    if (e.target.outerText === "Work") {
      router.push("/work");
    }
    if (e.target.outerText === "ReachME") {
      router.push("/reach-me");
    }
  };
  return (
    <div>
      <div
        className={classNames(
          "font-sofia font-bold flex justify-between items-center  text-lg p-5 shadow-sm  shadow-green-1",
          {
            "bg-trans": router.pathname === "/reach-me",
            "bg-black": router.pathname !== "/reach-me",
          }
        )}
      >
        <a
          id="Home"
          className={classNames("flex items-center justify-center gap-1", {
            "text-green-1 underline cursor-pointer duration-500": isOver.Home,
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
              "text-green-1 underline cursor-pointer duration-500":
                isOver.Skills,
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
              "text-green-1 underline cursor-pointer duration-500": isOver.Work,
            })}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={onClickHandler}
          >
            Work
          </label>
          <label
            id="ReachME"
            className={classNames({
              "text-green-1 underline cursor-pointer duration-500":
                isOver["ReachME"],
            })}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
            onClick={onClickHandler}
          >
            ReachME
          </label>
        </div>
      </div>
      {/* <div className="h-[2px] bg-green-1 w-full"></div> */}
    </div>
  );
};

export default Header;