import React from "react";
import "./Comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      userId: 1,
      name: "Jack Alfred",
      profilePic:
        "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
      comment:
        "Great journey bro,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, atque. ",
    },
    {
      id: 2,
      userId: 1,
      name: "Anila Ruce",
      profilePic:
        "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      comment: "I wish you have enjoyed, come back ASAP I miss our trips",
    },
  ];
  return (
    <div className="comments">
      <div className="container">
        <div className="makeComment">
          <Link to={`/profile/${currentUser}`} className="user">
            <img
              src={currentUser.profilePic}
              width={"40px"}
              height={"40px"}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              alt=""
              srcset=""
            />
          </Link>
          <input type="text" name="" id="" placeholder="write a comment" />
          <button>Send</button>
        </div>
        {comments.map((comment) => (
          <div className="comment">
            <Link to={`/profile/${comment.userId}`} className="user">
              <img
                src={comment.profilePic}
                width={"30px"}
                height={"30px"}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                alt=""
                srcset=""
              />
              <p>{comment.name}</p>
            </Link>

            <div className="content">
              <p>{comment.comment}</p>
              {/* <span>(1 hour ago)</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
