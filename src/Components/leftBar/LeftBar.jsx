import "./LeftBar.scss";

import friends from "../../assets/1.png";
import groups from "../../assets/2.png";
import marketPlace from "../../assets/3.png";
import watch from "../../assets/4.png";
import memories from "../../assets/5.png";
import events from "../../assets/6.png";
import gaming from "../../assets/7.png";
import gallery from "../../assets/8.png";
import videos from "../../assets/9.png";
import messages from "../../assets/10.png";
import fundraiser from "../../assets/11.png";
import tutorials from "../../assets/12.png";
import courses from "../../assets/13.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <section className="mainSection">
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <span>Ahmed</span>
          </div>
          <div className="friends">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="groups">
            <img src={groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="marketPlace">
            <img src={marketPlace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="watch">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="memories">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </section>{" "}
        <hr />
        <section className="shortCut">
          <p>Your Shortcuts</p>
          <div className="events">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="gaming">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="gallery">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="videos">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="messages">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
        </section>
        <hr />
        <section className="others">
          <p>Others</p>
          <div className="fundraiser">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="tutorials">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="courses">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeftBar;
