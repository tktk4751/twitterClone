import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function widget() {
  return (
    <div className="widget">
      <div className="widget_input">
        <Search className="widget_searchIcon" />
        <input placeholder="キーワードを検索" type="text"></input>
      </div>
      <div className="widget_widgetContainer">
        <h2>いまどうしてる?</h2>
        <TwitterTweetEmbed tweetId="1613667543927107584" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="0x_mycryptolife"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          className="widget_twitterShare"
          url={"https://twitter.com/0x_mycryptolife"}
          options={{ text: "#Reactなう", via: "0x_mycryptolife" }}
        />
      </div>
    </div>
  );
}

export default widget;
