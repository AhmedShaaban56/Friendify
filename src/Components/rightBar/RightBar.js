import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <section className="suggestions">
          <p>Suggestion For You</p>

          <div className="item">
            <div>
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=original"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Ronaldo</span>
            </div>
            <div>
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="item">
            <div>
              <img
                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/A65IV7DVYVNJXGGXDXOKQVNUWQ.jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Benzema</span>
            </div>
            <div>
              <button>follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </section>

        <section className="latestNews">
          <p>Latest Activities</p>
          <div className="item">
            <div>
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Jone Alice</span>
              <span className="action">changes his profile pic</span>
            </div>
            <div>
              <p>1 min ago</p>
            </div>
          </div>
          <div className="item">
            <div>
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Amr Hassan</span>
              <span className="action">new post</span>
            </div>
            <div>
              <p>5 min ago</p>
            </div>
          </div>
          <div className="item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Lucas Biden</span>
              <span className="action">changes his profile pic</span>
            </div>
            <div>
              <p>10 min ago</p>
            </div>
          </div>
        </section>

        <section className="online">
          <p>Online Friends</p>

          <div className="item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Benzema</span>
            </div>
          </div>
          <div className="item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Benzema</span>
            </div>
          </div>
          <div className="item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Benzema</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RightBar;
