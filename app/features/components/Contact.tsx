import React, { useEffect, useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ReachMeForm from "./ReachmeForm";
import { Audio } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { loadingHandler } from "../slices/globalSlice";

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
  });

  const Map = () => {
    const center = useMemo(
      () => ({
        lat: 18.49850483905522,
        lng: 79.0921649398577,
      }),
      []
    );
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-2/5 h-screen"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return (
    <div>
      <Header />

      {isLoaded ? (
        <div className="flex justify-around items-center">
          <Map />
          <div className="rounded">
            <ReachMeForm />
          </div>
        </div>
      ) : (
        <Audio
          height="300"
          width="300"
          color="green"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass="m-auto flex justify-center items-center"
          key={"loading-spinner"}
          visible
        />
      )}
      <Footer />
    </div>
  );
};

export default Contact;
