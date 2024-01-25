import React, { useState } from "react";
import "./Posts.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
const Posts = (probs) => {
  const postsData = [
    {
      id: 1,
      userId: 1,
      name: "Joliana",
      profilePic:
        "https://img.freepik.com/premium-photo/young-cheerful-tourist-woman-taking-selfie-with-pyramids-egypt-blurred-background_549612-2049.jpg",
      Postimage:
        "https://img.freepik.com/premium-photo/young-cheerful-tourist-woman-taking-selfie-with-pyramids-egypt-blurred-background_549612-2049.jpg",
      desc: "Hey folk, it's so interesting to enjoy seeing one of the worlds' seven wonders #Pyramids",
    },
    {
      id: 2,
      userId: 2,
      name: "Sara Joe",
      profilePic:
        "https://images.squarespace-cdn.com/content/v1/5d6aacb29e0b8f0001610a06/1696903638201-WWXSFZYD87UQ8J0EGQM4/shutterstock_759361057.jpg?format=1000w",
      // Postimage: "https://png.pngtree.com/thumb_back/fw800/background/20221201/pngtree-one-man-enjoying-beautiful-tropical-beach-freedom-selfie-maldives-photo-image_42982652.jpg",
      desc: "I need a movie recommendation about growing up kids, does anyone have?",
    },
    {
      id: 3,
      userId: 3,
      name: "Henderson",
      profilePic:
        "https://png.pngtree.com/thumb_back/fw800/background/20221201/pngtree-one-man-enjoying-beautiful-tropical-beach-freedom-selfie-maldives-photo-image_42982652.jpg",
      Postimage:
        "https://png.pngtree.com/thumb_back/fw800/background/20221201/pngtree-one-man-enjoying-beautiful-tropical-beach-freedom-selfie-maldives-photo-image_42982652.jpg",
      desc: "Summer vibes",
    },
    {
      id: 4,
      userId: 4,
      name: "Jack Alfred",
      profilePic: "https://pbs.twimg.com/media/GEJlO9uXkAAXQbl.jpg:large",
      Postimage: "https://i.ytimg.com/vi/f12WYfwDY_A/sddefault.jpg",
      desc: "From The river to the see, Palestine will be free.",
    },
  ];
  let liked = false;
  const [commnetOpen, setCommentOpen] = useState(true);
  return (
    <div className="posts">
      <div className="container">
        {postsData.map((post) => (
          <div className="post" key={post.id}>
            <div className="userInfo">
              <Link to={`/profile/${post.userId}`} className="userNameImg">
                <img
                  src={post.profilePic}
                  width={"50px"}
                  height={"50px"}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt=""
                  srcSet=""
                />
                <p>
                  {post.name} <br /> <span>few seconds ago</span>
                </p>
              </Link>
              <MoreHorizOutlinedIcon />
            </div>
            <div className="postcontent">
              <p className="postText">{post.desc}</p>
              {post.Postimage && (
                <img
                  src={post.Postimage}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                  height={"400px"}
                  alt=""
                  srcSet=""
                />
              )}
            </div>
            <div className="interactions">
              <div className="react like">
                {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                <span> 12 Likes</span>
              </div>
              <div
                className="react comment"
                onClick={() => setCommentOpen(!commnetOpen)}
              >
                <SmsOutlinedIcon />
                <span>Comment</span>
              </div>
              <div className="react share">
                <ShareOutlinedIcon />
                <span>Share</span>
              </div>
            </div>
            {commnetOpen && <Comments />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
