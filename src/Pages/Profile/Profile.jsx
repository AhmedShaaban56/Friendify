import "./Profile.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Posts from "../../Components/posts/Posts";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="container">
        <div className="ProfileImages">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/03/21/13/jerusalem-1712855_1280.jpg"
            alt=""
            width={"100%"}
            className="background"
            srcset=""
          />
          <img
            src="https://ilkha.com/img/NewsGallery/2023/1/5/307363/FeaturedImage/c4bb7ebb-f328-4852-8047-316d687a7f8a.jpg"
            alt=""
            srcset=""
            className="profilePic"
          />
        </div>
        <div className="profileInfo">
          <div className="socials">
            <a
              href="https://www.instagram.com/?hl=arhttps://www.facebook.com/?locale=ar_AR"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookRoundedIcon className="icon" />
            </a>
            <a
              href="https://www.instagram.com/?hl=ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="icon" />
            </a>
            <a
              href="https://twitter.com/?lang=ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-shaaban-2b8715150/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="personalData">
            <p>{currentUser.name}</p>
            <button>Follow</button>
          </div>
          <div className="setting">
            <MoreVertIcon />
          </div>
        </div>
        <Posts myPosts={currentUser.name} />
      </div>
    </div>
  );
};

export default Profile;
