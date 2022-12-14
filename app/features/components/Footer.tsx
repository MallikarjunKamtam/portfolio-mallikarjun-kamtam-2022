import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";
import classNames from "classnames";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const [iconOver, setIconOver] = useState(0);

  // <a href="tel:6031112298"></a>

  const footerData = [
    {
      id: 1,
      icon: PhoneIcon,
      title: "Phone",
      link: "tel:9550660375",
      subText: "You can contact me throgh phone",
    },
    {
      id: 2,
      icon: InstagramIcon,
      title: "Instagram",
      link: "https://www.instagram.com/mallikarjun_kamtam/",
      subText: "You can contact me throgh Insta",
    },
    {
      id: 3,
      icon: GitHubIcon,
      title: "Git hub",
      link: "https://github.com/MallikarjunKamtam",
      subText: "You can contact me throgh Git",
    },
    {
      id: 4,
      icon: EmailIcon,
      title: "Email",
      link: "mailto:mallikarjunkamtam@gmail.com",
      subText: "You can contact me throgh Email",
    },
    {
      id: 5,
      icon: YouTubeIcon,
      title: "Youtube",
      link: "https://www.youtube.com/channel/UC2586m2A2KMDJV7fpyoZXzw",
      subText: "You can contact me throgh Youtube",
    },
  ];

  const handleClick = (event: any) => {
    console.log(event);
  };

  const footerIconhandler = (e: any) => {
    const { id } = e.target;
    console.log(e, "e");
    setIconOver(id);
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "2%",
        right: "1%",
      }}
      className="mt-12 flex items-center justify-center gap-5"
    >
      <div></div>
      {footerData.map((item: any) => (
        <div
          onMouseOver={footerIconhandler}
          id={item.id.toString()}
          onClick={handleClick}
          className="cursor-pointer"
          key={item.id}
        >
          <Tooltip placement="top" title={item.title}>
            <a
              target="_blank"
              href={item.link}
              className={classNames("cursor-pointer", {
                "bg-green-1": +item.id === +iconOver,
              })}
              rel="noreferrer"
            >
              {<item.icon />}
            </a>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Footer;
