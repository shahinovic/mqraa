import { Link } from "react-router-dom";

const LinkToProfile = ({ user }) => {
  console.log("🚀 ~ file: LinkToProfile.jsx:2 ~ LinkToProfile ~ user:", user);

  const { name, avatar, category, id } = user;

  return (
    <Link to={`/attendance/${category}/${id}`}>
      <div className="link-to-profile d-flex align-items-center gap-3 mb-3 rounded-2 py-2 px-3 text-light">
        <div className="img-container rounded-pill overflow-hidden ">
          <img
            src={avatar}
            style={{ width: "128px", height: "128px" }}
            alt=""
          />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </Link>
  );
};

export default LinkToProfile;
