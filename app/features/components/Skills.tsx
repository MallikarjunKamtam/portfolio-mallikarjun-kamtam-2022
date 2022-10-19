import React, { useState } from "react";
import Image from "next/image";
import CodeIcon from "@mui/icons-material/Code";
import classNames from "classnames";
import BootStrap from "../../sources/bootstrap.png";
import Css from "../../sources/csss.webp";
import Git from "../../sources/git.png";
import Html from "../../sources/html.png";
import JS from "../../sources/javascript.png";
import MongoDB from "../../sources/mongo.webp";
import Next from "../../sources/next js.png";
import PostGre from "../../sources/postgre.png";
import Photoshop from "../../sources/ps.png";
import ReactLogo from "../../sources/react.png";
import Redux from "../../sources/redux.png";
import Scss from "../../sources/scss.jpg";
import Storybook from "../../sources/storybook.jpg";
import Tailwind from "../../sources/tailwind.jpg";
import TS from "../../sources/typescript.png";
import Express from "../../sources/express-node.png";
import Figma from "../../sources/figma.png";
import Header from "./Header";
import Footer from "./Footer";
import { Dna, FallingLines } from "react-loader-spinner";

const Skills = () => {
  const allSkills = {
    skills: {
      frontEnd: [
        {
          id: 102,
          logo: JS,
          name: "Javascript",
          level: 4.432,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 101,
          logo: TS,
          name: "Type Script",
          level: 4.2,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 7,
          logo: Next,
          name: "Next",
          level: 4.3234,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 10,
          logo: ReactLogo,
          name: "React",
          level: 4.78,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 11,
          logo: Redux,
          name: "Redux",
          level: 3.5,
          side: { sideID: 12, sideName: "Front end" },
        },

        {
          id: 2,
          logo: Css,
          name: "Css",
          level: 4.32,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 15,
          logo: Tailwind,
          name: "Tailwind",
          level: 4.3213,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 111,
          logo: BootStrap,
          name: "BootStrap",
          level: 3.2,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 4,
          logo: Html,
          name: "Html",
          level: 4.8,
          side: { sideID: 12, sideName: "Front end" },
        },

        {
          id: 12,
          logo: Scss,
          name: "SCSS",
          level: 4.5,
          side: { sideID: 12, sideName: "Front end" },
        },
        {
          id: 13,
          logo: Storybook,
          name: "Storybook",
          level: 4.5,
          side: { sideID: 12, sideName: "Front end" },
        },
      ],
      backEnd: [
        {
          id: 116,
          logo: Express,
          name: "Express + Node",
          level: 4.3213,
          side: { sideID: 11, sideName: "Back end" },
        },
      ],
      devops: [
        {
          id: 3,
          logo: Git,
          name: "Git",
          level: 4.1,
          side: { sideID: 15, sideName: "Devops" },
        },
      ],

      dataBase: [
        {
          id: 8,
          logo: PostGre,
          name: "PostGreSQL",
          level: 3.999,
          side: { sideID: 14, sideName: "Database" },
        },
        {
          id: 6,
          logo: MongoDB,
          name: "MongoDB",
          level: 3.922,
          side: { sideID: 14, sideName: "Database" },
        },
      ],
      uiDesign: [
        {
          id: 9,
          logo: Photoshop,
          name: "Photoshop",
          level: 3.75,
          side: { sideID: 13, sideName: "UI Design" },
        },
        {
          id: 17,
          logo: Figma,
          name: "Figma",
          level: 3.5,
          side: { sideID: 13, sideName: "UI Design" },
        },
      ],
    },
  };

  const iconDesign = {
    width: "60",
    height: "60",
    rounded: "rounded-xl",
    background: "bg-white",
    transform: "scale-130",
  };

  const [currentCard, setCurrentCard] = useState<any | null | undefined>();

  const [isSpinnerOn, setIsSpinnerOn] = useState<boolean>(false);

  const skillCard = (logo: any) => {
    return (
      <div className="rounded m-auto mt-10 w-2/6 bg-wall shadow-md  shadow-green-1">
        <label className="text-3xl">
          {logo.name} - {logo.side.sideName}
        </label>
        <div className="">
          <label className="text-xs"> Competancy level {logo.level} / 5</label>
          <div
            style={{
              width: "75%",
              margin: "auto",
              border: "2px solid black",
            }}
          >
            <div
              style={{
                width: `${logo.level * 20}%`,
              }}
              // className="w-[100px] bg-green-1 h-2 rounded-lg"
              className={classNames("h-2 rounded-lg", {
                "bg-merun": logo.level < 3,
                "bg-yellow-1": logo.level < 3.3,
                "bg-green-5": logo.level < 3.7,
                "bg-green-4": logo.level < 4,
                "bg-green-3": logo.level < 4.3,
                "bg-green-2": logo.level < 4.8,
                "bg-green-1": logo.level < 5,
              })}
            ></div>
          </div>
          <div className="h-[20px]"></div>
        </div>
      </div>
    );
  };

  const allSkillsList = [
    ...allSkills.skills.frontEnd,
    ...allSkills.skills.backEnd,
    ...allSkills.skills.devops,
    ...allSkills.skills.uiDesign,
    ...allSkills.skills.dataBase,
  ];

  const handleCardEnter = (e: any) => {
    setIsSpinnerOn(true);
    const currentCardID = +e.target.id;
    const selectedCard = allSkillsList.find((card: any) => {
      return card.id === currentCardID;
    });
    setCurrentCard(selectedCard);
  };

  const handleCardLeave = () => {
    setIsSpinnerOn(false);
    // setCurrentCard({
    //   id: 10,
    //   logo: ReactLogo,
    //   name: "React",
    //   level: 4.78,
    //   side: { sideID: 12, sideName: "Front end" },
    // });
  };

  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="mt-2">
        <div className="flex gap-9 justify-center items-center pt-5 pb-5">
          {allSkills.skills.frontEnd.map((logo: any) => (
            <div
              key={logo.id}
              className={classNames({
                "scale-110 duration-500": currentCard?.id === logo.id,
              })}
            >
              <Image
                id={logo.id.toString()}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                alt={logo.name}
                className={classNames(
                  `${iconDesign.rounded} ${iconDesign.background} `
                )}
                width={iconDesign.width}
                height={iconDesign.height}
                key={logo.id}
                src={logo.logo}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-9">
          <div className="flex gap-3 justify-center items-center">
            {allSkills.skills.backEnd.map((logo: any) => (
              <div
                key={logo.id}
                className={classNames({
                  "scale-110 duration-500": currentCard?.id === logo.id,
                })}
              >
                <Image
                  id={logo.id.toString()}
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                  alt={logo.name}
                  className={iconDesign.rounded}
                  width={iconDesign.width}
                  height={iconDesign.height}
                  key={logo.id}
                  src={logo.logo}
                />
              </div>
            ))}
          </div>{" "}
          <div className="flex gap-3 justify-center items-center">
            {allSkills.skills.devops.map((logo: any) => (
              <div
                key={logo.id}
                className={classNames({
                  "scale-110 duration-500": currentCard?.id === logo.id,
                })}
              >
                <Image
                  id={logo.id.toString()}
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                  alt={logo.name}
                  className={iconDesign.rounded}
                  width={iconDesign.width}
                  height={iconDesign.height}
                  key={logo.id}
                  src={logo.logo}
                />
              </div>
            ))}
          </div>{" "}
          <div className="flex gap-3 justify-center items-center">
            {allSkills.skills.dataBase.map((logo: any) => (
              <div
                key={logo.id}
                className={classNames({
                  "scale-110 duration-500": currentCard?.id === logo.id,
                })}
              >
                <Image
                  id={logo.id.toString()}
                  onMouseEnter={handleCardEnter}
                  onMouseLeave={handleCardLeave}
                  alt={logo.name}
                  className={iconDesign.rounded}
                  width={iconDesign.width}
                  height={iconDesign.height}
                  key={logo.id}
                  src={logo.logo}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center pt-5 pb-5">
          {allSkills.skills.uiDesign.map((logo: any) => (
            <div
              key={logo.id}
              className={classNames({
                "scale-110 duration-500": currentCard?.id === logo.id,
              })}
            >
              <Image
                id={logo.id.toString()}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                alt={logo.name}
                className={iconDesign.rounded}
                width={iconDesign.width}
                height={iconDesign.height}
                key={logo.id}
                src={logo.logo}
              />
            </div>
          ))}
        </div>
        {currentCard ? <div>{skillCard(currentCard)}</div> : <></>}
      </div>
      {isSpinnerOn ? (
        <div className="absolute bottom-0 left-0">
          <FallingLines color="#4fa94d" width="60" visible={true} />
        </div>
      ) : (
        <label className="text-sm absolute bottom-1 left-1">
          <span className="font-bold rounded">
            Hover on skill to find out more details...
          </span>
        </label>
      )}
      <Footer />
    </div>
  );
};

export default Skills;
