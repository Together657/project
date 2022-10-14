import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";

export function Post() {
  const [apiData, setApiData] = useState([]);
  const url =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg";
  const getData = async () => {
    let resp = await axios.get(
      "https://im-community.insightmonk.com/v1/posts?page=1&limit=10&sort=date"
    );
    setApiData(resp?.data?.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {apiData?.map((list) => {
        return (
          <div className="MainCard d-flex " style={{ background: "#fff" }}>
            <div className="left">
              <p className="topicName">{list?.topicName}</p>
              <p className="title">{list?.title}</p>
              <span className="body">{list?.body}</span>
              {list?.tags[0]?.name && (
                <p className="tag">{list?.tags[0]?.name}</p>
              )}
            </div>

            <div className="right">
              <div className="userFeedback d-flex align-item-center justify-content-between">
                <div className=" d-flex align-item-center justify-content-center flex-column p-2">
                  <p className="fw-bold fs-3">
                    {list?.vote_aggregate?.upvoteCount ?? "-"}
                  </p>
                  <p>vote</p>
                </div>
                <div
                  className=" d-flex align-item-center justify-content-center flex-column p-2"
                  style={{ color: "green" }}
                >
                  <p className="fw-bold fs-3">
                    {list?.vote_aggregate?.downvoteCount ?? "-"}
                  </p>
                  <p>Answer</p>
                </div>
                <div className=" d-flex align-item-center justify-content-center flex-column p-2">
                  <p className="fw-bold fs-3">{list?.viewCount ?? "-"} </p>
                  <p>Views</p>
                </div>
              </div>

              <div className="user">
                <div>
                  <img src={url} alt="" className="pic" />
                </div>
                <div className="name">
                  <p className="fw-semibold fs-6">
                    {list?.user?.firstName} {list?.user?.lastName}
                  </p>
                  <span>
                    Asked{" "}
                    {new Date().getMonth() -
                      new Date(list?.createdAt).getMonth()}{" "}
                    month ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
