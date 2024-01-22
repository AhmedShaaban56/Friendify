import React, { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../Context/AuthContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const storiesData = [
    {
      id: 1,
      name: "Ali",
      img: "https://www.peaqpartners.com/wp-content/uploads/2016/08/youth-active-jump-happy-40815-790x500.jpeg",
    },
    {
      id: 2,
      name: "Hasnaa",
      img: "https://www.canberratimes.com.au/images/transform/v1/crop/frm/RXMuw2JbrrS7ELSxSY9rkR/3a27a0b8-168a-4998-82dd-11ca2b1c5959.jpg/r210_85_2526_1629_w2736_h1824_fmax.jpg",
    },
    {
      id: 3,
      name: "Hoe",
      img: "https://hudsonreporter.com/wp-content/uploads/2023/04/2-2.jpg",
    },
    {
      id: 4,
      name: "Anas",
      img: "https://www.socialistsanddemocrats.eu/sites/default/files/styles/header_background/public/2019-04/Palestine%402x.jpg?itok=wc3eu5BG",
    },
  ];
  return (
    <div className="stories">
      <div className="conatiner">
        <section className="shorts">
          <div className="story">
            <img src={currentUser.profilePic} alt="" />
            {/* <span>{currentUser.name}</span> */}
            <a href="#">+</a>
          </div>
          {storiesData.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" srcset="" />
              <span>{story.name}</span>
            </div>
          ))}
        </section>
        {/* <div className="addReels"></div> */}
      </div>
    </div>
  );
};

export default Stories;
