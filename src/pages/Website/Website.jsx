import React from "react";

import {
  AiFillEye as View,
  AiOutlineInfoCircle as Info,
  AiFillYoutube as Youtube,
  AiFillCamera as Camera,
} from "react-icons/ai";
import { LuSliders as Slider } from "react-icons/lu";
import { GiNewspaper as News } from "react-icons/gi";
import { TbFileSettings as PageSettings } from "react-icons/tb";
import { BsPenFill as Edit } from "react-icons/bs";
import { IoIosAlbums as Album } from "react-icons/io";
import { TbActivityHeartbeat as Beat } from "react-icons/tb";
import { BiSolidMessageAltError as Error } from "react-icons/bi";
import { SiTrustpilot as Trust } from "react-icons/si";
import { GiThreeFriends as Friends } from "react-icons/gi";
import { MdManageAccounts as Account } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DashbordCard } from "../../components";
const Website = () => {
  const firstColor = "#418a84";
  // const secondColor = "#bf8b49";
  const cards = [
    {
      col: 12,
      path: "/website/website-info",
      title: "بيانات الموقع",
      icon: <Info />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-sliders",
      title: "إدارة الاسلايدر",
      icon: <Slider />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-news",
      title: "إدارة الأخبار",
      icon: <News />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-pages",
      title: "إدارة الصفحات",
      icon: <PageSettings />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-logs",
      title: "إدارة التسجيلات اونلاين",
      icon: <Edit />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-channel",
      title: "إدارة القناة",
      icon: <Youtube />,
      color: firstColor,
    },

    {
      col: 6,
      path: "/website/website-albums",
      title: "إدارة الألبوم",
      icon: <Album />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-photos",
      title: "إدارة الصور",
      icon: <Camera />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-numbers",
      title: "إدارة الأرقام",
      icon: <Beat />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-questions",
      title: "إدارة الأسئلة الشائعة",
      icon: <Error />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-trust",
      title: "إدارة الشهادات والأقوال",
      icon: <Trust />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-partners",
      title: "إدارة شركاء النجاح",
      icon: <Friends />,
      color: firstColor,
    },
    {
      col: 6,
      path: "/website/website-programs",
      title: "إدارة برامجنا",
      icon: <Account />,
      color: firstColor,
    },
  ];
  return (
    <div className="website py-3 px-2 bg-light rounded-2" dir="rtl">
      <Row>
        <Col className="mb-4" xs={12}>
          <a href="http://www.google.com" target="_blank">
            <DashbordCard
              icon={<View />}
              title="زيارة الموقع"
              color={firstColor}
            />
          </a>
        </Col>
        {cards.map((ele, index) => {
          const { path, col, title, icon, color } = ele;
          return (
            <Col className="mb-4" key={index} md={col}>
              <Link to={path}>
                <DashbordCard icon={icon} title={title} color={color} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Website;
