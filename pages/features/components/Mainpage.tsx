import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadingHandler } from "../slices/globalSlice";

const Mainpage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state).global;

  return (
    <div className="mt-32">
      <div>
        {/* <label className="text-3xl">Hi there, 😉</label> */}
        <label className="text-2xl decoration-green-2 font-bold">Hi,</label>
      </div>
      <div className="w-3/5  mt-14 m-auto">
        <label className="text-xl font-bold indent-6">
          I am Mallikarjun Kamtam, working as a Full-Stack developer. I love
          coding, playing video games, travelling.
        </label>
      </div>
    </div>
  );
};

export default Mainpage;
