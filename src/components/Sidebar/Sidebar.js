import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*icon*/}
      <TwitterIcon className="sidebar_twitterIcon" />

      {/*sidebarOption */}
      <SidebarOptions text="ホーム" Icon={HomeIcon} />
      <SidebarOptions text="話題を検索" Icon={SearchIcon} />
      <SidebarOptions text="通知" Icon={MailOutlineIcon} />
      <SidebarOptions text="メッセージ" Icon={NotificationsNoneIcon} />
      <SidebarOptions text="プロフィール" Icon={BookmarkBorderIcon} />
      <SidebarOptions text="もっとみる" Icon={MoreHorizIcon} />
      {/*sidebarOption */}
      {/*sidebarOption */}
      {/*sidebarOption */}
      {/*sidebarOption */}
      {/*sidebarOption */}

      {/**ツイートボタン */}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
