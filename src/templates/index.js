import Base from "./base";
import { StorySlider } from "../components/slider";
import { useMobile945 } from "../hook/useMobile";
import { useState, useEffect, useRef, useContext } from "react";
import { getRandomUser } from "../utils/random";
import PostList from "../components/post";
import UserList from "../components/userPanel";
import { UserContext } from "../components/UserContext";

const Index = () => {
  const isHideSidePanel = useMobile945();
  // const [user, setUser] = useState({});
  const userInfo = useContext(UserContext);
  return (
    <Base showHeader={true}>
      <div className="flex ">
        <div
          className={`${
            isHideSidePanel ? "mx-auto" : "ml-auto "
          } flex flex-col max-w-full md:max-w-[620px] noScrollBar noScrollBarMobile`}
        >
          <StorySlider />
          <PostList currentUser={userInfo.userContext.user} />
        </div>
        {!isHideSidePanel && (
          <div className="w-[325px] mr-auto">
            {userInfo.userContext.user && (
              <UserList user={userInfo.userContext.user} />
            )}
          </div>
        )}
      </div>
    </Base>
  );
};
export default Index;
