import { LinkToProfile } from "../../components";

const AttendanceRenderLinks = ({ usersData }) => {
  const renderLinks = () => {
    return usersData.map((user) => <LinkToProfile user={user} />);
  };
  return <div className="render-links py-3 px-2">{renderLinks()}</div>;
};

export default AttendanceRenderLinks;
