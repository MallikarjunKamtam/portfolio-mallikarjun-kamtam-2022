import React from "react";

const Mainpage = () => {
  return (
    <div className="mt-32">
      <div>
        {/* <label className="text-3xl">Hi there, 😉</label> */}
        <label className="text-2xl underline decoration-green-2">
          Heading Main
        </label>
      </div>
      <div className="w-3/5  mt-14 m-auto">
        <label className="text-lg indent-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </label>
      </div>
    </div>
  );
};

export default Mainpage;
