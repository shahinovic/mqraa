import { Col, Row } from "react-bootstrap";
import { DashbordCard } from "..";
import { FiUsers as Users } from "react-icons/fi";
import {
  AiOutlineSetting as AiSetting,
  AiOutlineUnorderedList as AiUnorderedList,
  AiOutlineVideoCamera as AiVideoCamera,
  AiOutlineCheckSquare as AiCheckSquare,
  AiOutlineCalendar as AiCalendar,
  AiOutlineCheckCircle as AiCheckCircle,
} from "react-icons/ai";
import { LiaNewspaper as Paper } from "react-icons/lia";
import { FcStatistics as Statistics } from "react-icons/fc";
import { BsBook as Book } from "react-icons/bs";
import { IoCopyOutline as Copy } from "react-icons/io5";
import { FiUserCheck as UserCheck } from "react-icons/fi";
import { FaMoneyCheckAlt as MoneyCheck } from "react-icons/fa";
import { TbWorld as World } from "react-icons/tb";

const DashboardHeader = () => {
  const column = 6;
  const cards = [
    {
      col: column,
      icon: <Users />,
      title: "70 الطلاب",
    },
    {
      col: column,
      icon: <Users />,
      title: "70 المعلمين",
    },
    {
      col: column,
      icon: <AiUnorderedList />,
      title: "70 الحلقات",
    },
    {
      col: column,
      icon: <Users />,
      title: "19 أولياء الأمور",
    },
    {
      col: column,
      icon: <AiCheckSquare />,
      title: "الحفظ والمراجعة",
    },
    {
      col: column,
      icon: <AiCalendar />,
      title: "حضور الطلاب",
    },
    {
      col: column,
      icon: <AiCheckCircle />,
      title: "حضور المعلمين",
    },
    {
      col: column,
      icon: <AiCalendar />,
      title: "حضور الموظفين",
    },
    {
      col: column,
      icon: <Paper />,
      title: "التقارير",
    },
    {
      col: column,
      icon: <Statistics />,
      title: "الإحصاءات",
    },
    {
      col: column,
      icon: <Book />,
      title: "الخطط والمقررات",
    },
    {
      col: column,
      icon: <AiCheckCircle />,
      title: "الإختبارات",
    },
    {
      col: column,
      icon: <Copy />,
      title: "إعداد البطاقات",
    },
    {
      col: column,
      icon: <UserCheck />,
      title: "السجل الذهبي",
    },
    {
      col: column,
      icon: <AiVideoCamera />,
      title: "المقرأة الإلكترونية",
    },
    {
      col: column,
      icon: <Book />,
      title: "المكتبة",
    },
    {
      col: column,
      icon: <MoneyCheck />,
      title: "الشؤون المالية",
    },
    {
      col: column,
      icon: <Users />,
      title: "الموظفين",
    },
    {
      col: column,
      icon: <World />,
      title: "الموقع الإلكتروني",
    },
    {
      col: column,
      icon: <AiSetting />,
      title: "الإعدادات",
    },
  ];
  return (
    <div className="dashboard-header mb-5">
      <Row className="mb-3">
        {cards.map((card, index) => {
          const { col, icon, title } = card;
          return (
            <Col className="mb-3" xs={12} md={col} key={index}>
              <DashbordCard icon={icon} title={title} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DashboardHeader;
