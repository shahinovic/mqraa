import "./Content.css";

import MyRoutes from "../MyRoutes/MyRoutes";
import Location from "../Location/Location";

const Content = () => {
  return (
    <div className="content bg-light py-3 px-2 rounded-3  mt-2 relative ">
      <Location />
      <MyRoutes />
    </div>
  );
};

export default Content;
