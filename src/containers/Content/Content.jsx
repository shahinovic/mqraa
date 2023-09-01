import "./Content.css";

import MyRoutes from "../MyRoutes/MyRoutes";
import Location from "../Location/Location";

const Content = () => {
  return (
    <div className="content bg-light relative ">
      <Location />
      <MyRoutes />
    </div>
  );
};

export default Content;
