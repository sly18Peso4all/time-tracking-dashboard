import person from "../images/person.jpg";

const Profile = () => {
  return (
    <div className="avatar_profile">
      <div class="avatar_name">
        <img src={person} alt="avatar" />
        <div className="avaar_show">
          <small className="report">Report for</small>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div class="avatar_time">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default Profile;
