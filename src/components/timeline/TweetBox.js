import { Avatar, Button, inputAdornmentClasses } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "山根",
      username: "yamane_onfire",
      verified: true,
      text: tweetMessage,
      avatar: "https://twitter.com/superspace_ttf/photo",
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox_input">
          <Avatar />
          <input
            placeholder="いまどうしてる?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          className="tweetbox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
