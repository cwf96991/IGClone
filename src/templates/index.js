import Base from "./base";
import { StorySlider } from "../components/slider";
import { useMobile945, useMobile768 } from "../hook/useMobile";
import { useState, useEffect, useRef, useContext } from "react";
import PostList from "../components/post";
import UserList from "../components/userPanel";
import { UserContext } from "../components/UserContext";
import SwipeableViews from "react-swipeable-views";
import { CameraMain } from "../components/mobileCamera";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const Index = () => {
  const isHideSidePanel = useMobile945();
  const isMobile = useMobile768();
  const webcamRef = useRef(null);
  const userInfo = useContext(UserContext);
  const swipeableRef = useRef(null);
  const MainScreen = () => {
    return (
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
    );
  };
  return isMobile ? (
    <SwipeableViews
      index={1}
      ref={swipeableRef}
      onChangeIndex={(index, indexLatest, meta) => {
        if (indexLatest == 0 && index == 1) {
          enableBodyScroll(webcamRef.current);
        } else if (indexLatest == 1 && index == 0) {
          disableBodyScroll(webcamRef.current);
        }
      }}
      className="relative"
      enableMouseEvents
    >
      <CameraMain webcamRef={webcamRef} swipeableRef={swipeableRef} />

      <Base showHeader={true}>
        <MainScreen />
      </Base>
    </SwipeableViews>
  ) : (
    <Base showHeader={true}>
      <MainScreen />
    </Base>
  );
};
export default Index;
