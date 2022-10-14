import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Mainpage from "./features/Mainpage";
const Home: NextPage = () => {
  return (
    <div className="text-sm text-ash">
      <Header />
      <div>
        <Mainpage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
