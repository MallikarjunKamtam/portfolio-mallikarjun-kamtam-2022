import React, { useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

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
        mapContainerClassName="w-full h-screen"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return (
    <div>
      <Header />
      {isLoaded ? <Map /> : <label className="text-3xl">Loading...</label>}
      <Footer />
    </div>
  );
};

export default Contact;
