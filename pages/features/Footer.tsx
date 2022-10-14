import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  interface IFooterData {
    id: number;
    icon: any;
    title: string;
    link: string;
    subText: string;
  }

  // <a href="tel:6031112298"></a>

  const footerData = [
    {
      id: 1,
      icon: <PhoneIcon />,
      title: "Phone",
      link: "tel:6031112298",
      subText: "You can contact me throgh phone",
    },
    {
      id: 2,
      icon: <InstagramIcon />,
      title: "Instagram",
      link: "tel:6031112298",
      subText: "You can contact me throgh phone",
    },
    {
      id: 3,
      icon: <GitHubIcon />,
      title: "Git hub",
      link: "tel:6031112298",
      subText: "You can contact me throgh phone",
    },
    {
      id: 4,
      icon: <EmailIcon />,
      title: "Email",
      link: "tel:6031112298",
      subText: "You can contact me throgh phone",
    },
  ];

  const handleClick = (event: any) => {
    console.log(event);
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "15px",
        left: "43%",
      }}
      className="mt-12 flex items-center justify-center gap-9"
    >
      {footerData.map((item: IFooterData) => (
        <div
          id={item.id.toString()}
          onClick={handleClick}
          className="cursor-pointer"
          key={item.id}
        >
          <Tooltip placement="top" title={item.title}>
            <label className="cursor-pointer">{item.icon}</label>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Footer;
