import data from "../data";
import { BsThreeDots } from "react-icons/bs";

const Details = () => {
  return (
    <div class="avatar_info">
      {data.map((avatar, index) => (
        <div key={index} className="avatar_box">
          <div class="avatar_colors"></div>

          <div class="avatar_activities">
            <div class="avatar_detail">
              <h4>{avatar.activity}</h4>
              <p>
                <BsThreeDots />{" "}
              </p>
            </div>
            <div class="avatar_hours">
              <h2>{avatar.hours}</h2>
              <small>Last Week - {avatar.lastweekHours}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
