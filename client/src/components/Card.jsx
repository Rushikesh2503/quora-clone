import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import styles from "../styles/card.module.css";
import Paper from "@mui/material/Paper";
import Upvote from "../svg/Upvote";
import Downvote from "../svg/Downvote";
import Share from "../svg/Share";
import Comments from "../svg/Comments";
import Share_icon from "../svg/Share_icon";
import Dotted_icon from "../svg/Dotted_icon";

const Card = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:8000/posts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("http://localhost:8000/posts/upvote", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  const unlikePost = (id) => {
    fetch("http://localhost:8000/posts/downvote", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const makeComment = (text, postId) => {
    fetch("http://localhost:8000/posts/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result)
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const maincard_paper = {
    height: "575px",
    marginBottom: "10px",
    cursor: "pointer",
  };
  return (
    <div className={styles.main_card_container}>
      {data.map((el, i) => {
        //console.log('el:', el)
        return (
          <Paper variant="outlined" square sx={maincard_paper}>
            <div className={styles.secondary_card_container} key={i}>
              <div className={styles.user_main_intro}>
                <div>
                  <img
                    className={styles.main_image}
                    height="50"
                    width="50"
                    src={el.postedBy.pic}
                    alt="profileimg"
                  />
                </div>

                <div>
                  <div className={styles.user_intro}>
                    <h4>{el.postedBy.name}</h4>
                    <a href="#">Follow</a>
                  </div>

                  <div className={styles.user_about_date}>
                    {/* <p>{el.about}</p>
                    <p>{el.date.toString().slice(0, 15)}</p> */}
                  </div>
                </div>
              </div>

              <div className={styles.answer}>
                <h3>{el.title}</h3>
                <div>
                  <p>{el.body}</p>
                </div>
              </div>

              <div>
                <div>
                  <img
                    className={styles.post_images}
                    src={el.photo}
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className={styles.all_icons}>
              <div className={styles.cardlast_section}>
                <div className={styles.vote}>
                  <button
                    className={styles.button_upvoted}
                    onClick={() => {
                      likePost(el._id);
                    }}
                  >
                    <Upvote />
                    <p>12.4k</p>
                  </button>

                  <button
                    className={styles.button_voted}
                    onClick={() => {
                      unlikePost(el._id);
                    }}
                  >
                    <Downvote />
                  </button>
                </div>

                <div className={styles.share}>
                  <button className={styles.button_upvoted}>
                    <Share />
                    <p>78</p>
                  </button>
                </div>

                <div className={styles.comments}>
                  <button className={styles.button_upvoted}>
                    <Comments />
                    <p>68</p>
                  </button>
                </div>
              </div>

              <div className={styles.dotted_share}>
                <div className={styles.comments}>
                  <button className={styles.button_voted}>
                    <Share_icon />
                  </button>
                </div>
                <div className={styles.comments}>
                  <button className={styles.button_voted}>
                    <Dotted_icon />
                  </button>
                </div>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
};

export default Card;
