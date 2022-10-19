import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { title } from "process";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CodeIcon from "@mui/icons-material/Code";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

interface IAbout {
  id: number;
  title: string;
  category: string;
  icon: any;
}

const About = () => {
  const aboutMe = [
    { id: 1, title: "Badminton", category: "Sports", icon: SportsTennisIcon },
    {
      id: 2,
      title: "Video Games",
      category: "Sports",
      icon: VideogameAssetIcon,
    },
    {
      id: 3,
      title: "Coding",
      category: "Work",
      icon: CodeIcon,
    },
    {
      id: 4,
      title: "Food",
      category: "Food",
      icon: FastfoodIcon,
    },
    {
      id: 5,
      title: "Travelling",
      category: "Travelling",
      icon: TravelExploreIcon,
    },
  ];

  return (
    <div>
      <Header />
      <div className="text-lg text-green-1 font-bold">
        What I like to do all the day !
      </div>
      <div className="grid grid-cols-3 mt-10 gap-4">
        {aboutMe.map((item: IAbout) => (
          <div key={item.id} className="m-5">
            <label className="text-3xl font-bold">
              {item.title} <item.icon key={item.id} />
            </label>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
//WIP
export default About;
