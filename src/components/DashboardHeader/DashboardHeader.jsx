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
  return (
    <div className="dashboard-header mb-5">
      <Row className="mb-3">
        <Col md={3}>
          <DashbordCard icon={<Users />} title={"الطلاب 70"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Users />} title={"المعلمين 70"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<AiUnorderedList />} title={"الحلقات 70"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Users />} title={"أولياء الأمور 19"} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <DashbordCard icon={<AiCheckSquare />} title={"الحفظ والمراجعة"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<AiCalendar />} title={"حضور الطلاب"} />
        </Col>

        <Col md={3}>
          <DashbordCard icon={<AiCalendar />} title={"حضور المعلمين"} />
        </Col>

        <Col md={3}>
          <DashbordCard icon={<AiCalendar />} title={"حضور الموظفين"} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <DashbordCard icon={<Paper />} title={"التقارير"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Statistics />} title={"الإحصاءات"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Book />} title={"الخطط والمقررات"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<AiCheckCircle />} title={"الإختبارات"} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <DashbordCard icon={<Copy />} title={"إعداد البطاقات"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<UserCheck />} title={"السجل الذهبي"} />
        </Col>
        <Col md={3}>
          <DashbordCard
            icon={<AiVideoCamera />}
            title={"المقرأة الإلكترونية"}
          />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Book />} title={"المكتبة"} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <DashbordCard icon={<MoneyCheck />} title={"الشؤون المالية"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<Users />} title={"الموظفين"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<World />} title={"الموقع الإلكتروني"} />
        </Col>
        <Col md={3}>
          <DashbordCard icon={<AiSetting />} title={"الإعدادات"} />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHeader;
