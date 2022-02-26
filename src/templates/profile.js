import Base from "./base";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../components/UserContext";
import {
  ProfileHeader,
  ProfileTab,
  ProfilePostList,
} from "../components/profile";
import { getRandomUser } from "../utils/random";
const Profile = () => {
  const [user, serUser] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const [selectedTab, setSelectedTab] = useState("POSTS");
  const router = useRouter();
  const userInfo = useContext(UserContext).userContext;
  useEffect(() => {
    if (userInfo.user) {
      let username = router.query.username;

      if (userInfo.user.username == username) {
        setIsOwner(true);
        serUser(userInfo.user);
      } else {
        // username
        let user = getRandomUser(username);
        serUser(user);
      }
    }
  }, [userInfo]);
  const profilePostList = [
    {
      tab: "POSTS",
      list: <ProfilePostList postUser={user} />,
    },
    {
      tab: "SAVED",
      list: <ProfilePostList />,
    },
    {
      tab: "VIDEOS",
      list: <ProfilePostList />,
    },
    {
      tab: "TAGGED",
      list: <ProfilePostList />,
    },
  ];
  const TabView = () => {
    return (
      !(!user.isFollowing && user.isPrivate) &&
      profilePostList.map((profile, index) => {
        const { tab, list } = profile;
        return <div key={index}>{tab == selectedTab && list}</div>;
      })
    );
  };
  return (
    <Base
      title={
        user.name == null
          ? `CWFgram photos and videos`
          : `${user.name} (@${user.username})．CWFgram photos and videos`
      }
    >
      <div className="flex max-w-full md:max-w-[945px]  mx-auto ">
        <div className="overflow-x-hidden p-0 m-0 noScrollBar w-full">
          <div>
            <ProfileHeader user={user} isOwner={isOwner} />
            <ProfileTab
              selectedTab={selectedTab}
              isOwner={isOwner}
              isVideo={user.isVideo}
              isPrivate={user.isPrivate}
              isFollowing={user.isFollowing}
              onClick={(tab) => {
                setSelectedTab(tab);
              }}
            />
            <TabView />
          </div>
        </div>
        <div className="md:min-w-[16px]"></div>
      </div>
    </Base>
  );
};
export default Profile;
