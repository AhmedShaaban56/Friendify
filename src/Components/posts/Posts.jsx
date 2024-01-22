import React from "react";
import "./Posts.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
const Posts = () => {
  const postsData = [
    {
      id: 1,
      name: "Joliana",
      profilePic:
        "https://img.freepik.com/premium-photo/young-cheerful-tourist-woman-taking-selfie-with-pyramids-egypt-blurred-background_549612-2049.jpg",
      Postimage:
        "https://img.freepik.com/premium-photo/young-cheerful-tourist-woman-taking-selfie-with-pyramids-egypt-blurred-background_549612-2049.jpg",
      desc: "Hey folk, it's so interesting to enjoy seeing one of the worlds' seven wonders #Pyramids",
    },
    {
      id: 2,
      name: "Henderson",
      profilePic:
        "https://png.pngtree.com/thumb_back/fw800/background/20221201/pngtree-one-man-enjoying-beautiful-tropical-beach-freedom-selfie-maldives-photo-image_42982652.jpg",
      Postimage:
        "https://png.pngtree.com/thumb_back/fw800/background/20221201/pngtree-one-man-enjoying-beautiful-tropical-beach-freedom-selfie-maldives-photo-image_42982652.jpg",
      desc: "Summer vibes",
    },
    {
      id: 3,
      name: "Joliana",
      profilePic: "https://pbs.twimg.com/media/GEJlO9uXkAAXQbl.jpg:large",
      Postimage: "https://i.ytimg.com/vi/f12WYfwDY_A/sddefault.jpg",
      desc: "From The river to the see, Palestine will be free.",
    },
  ];
  return (
    <div className="posts">
      <div className="container">
        {postsData.map((post) => (
          <div className="post">
            <div className="userInfo">
              <div>
                <img
                  src={post.profilePic}
                  width={"50px"}
                  height={"50px"}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  alt=""
                  srcset=""
                />
                <p>
                  {post.name} <br /> <span>few seconds ago</span>
                </p>
              </div>
              <MoreHorizOutlinedIcon />
            </div>
            <div className="postcontent">
              <p className="postText">{post.desc}</p>
              <img
                src={post.Postimage}
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"400px"}
                alt=""
                srcset=""
              />
            </div>
            <div className="interactions">
              <div className="react">
                <FavoriteBorderOutlinedIcon />
                <span>Like</span>
              </div>
              <div className="react">
                <SmsOutlinedIcon />
                <span>Comment</span>
              </div>
              <div className="react">
                <ShareOutlinedIcon />
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
