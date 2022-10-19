import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingHandler } from "../slices/globalSlice";
import classNames from "classnames";

const Mainpage = () => {
  const dispatch = useDispatch();

  const [isTextOverOn, setIsTextOverOn] = useState(0);

  const { isLoading } = useSelector((state: any) => state).global;

  const mainText = "Hi there,";
  const subText =
    " I am Mallikarjun Kamtam, A Full-Stack developer. I love coding, playing video games, travelling.";

  const mainTextBrokenWords = mainText.split(" ").map((item: string, index) => {
    return {
      //for uniqeness of all words in the string adding 1000
      id: index + 1000,
      text: item,
    };
  });
  const subTextBrokenWords = subText.split(" ").map((item: string, index) => {
    return {
      id: index,
      text: item,
    };
  });

  const subTextHandler = (event: any) => {
    const { id } = event.target;
    setIsTextOverOn(id);
  };

  return (
    <div className="mt-32 ">
      <div>
        {/* <label className="text-3xl">Hi there, 😉</label> */}
        <label className="text-2xl decoration-green-2 font-bold">
          {mainTextBrokenWords.map((item: { id: number; text: string }) => {
            return (
              <span
                className={classNames({
                  "text-green-2": +item.id === +isTextOverOn,
                })}
                id={item.id.toString()}
                onMouseOver={subTextHandler}
                key={item.id}
              >{`${item.text} `}</span>
            );
          })}
        </label>
      </div>
      <div className="w-3/5  mt-14 m-auto">
        <label className="text-xl font-bold indent-6">
          {subTextBrokenWords.map((item: { id: number; text: string }) => {
            return (
              <span
                className={classNames({
                  "text-green-2": +item.id === +isTextOverOn,
                })}
                id={item.id.toString()}
                onMouseOver={subTextHandler}
                key={item.id}
              >{`${item.text} `}</span>
            );
          })}
        </label>
      </div>
    </div>
  );
};

export default Mainpage;
