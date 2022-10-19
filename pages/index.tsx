import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import Footer from "../app/features/components/Footer";
import Header from "../app/features/components/Header";
import Mainpage from "../app/features/components/Mainpage";
import { Provider } from "react-redux";
import store from "../app/store";
const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div className="text-sm ">
        <Header />
        <div>
          <Mainpage />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default Home;
