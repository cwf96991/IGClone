import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AvatarUsernameActionRow } from "../components/post/postWidget";
import { UserContext } from "../components/UserContext";
import { useContext, useEffect } from "react";
import Base from "./base";
import { personalWebsite } from "../utils/constant";

const LoginPage = () => {
  const imageList = [
    "https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg",
  ];
  const MockPhone = () => {
    return (
      <div className="relative ">
        <div className="mockup-phone absolute left-0">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <img src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"></img>
            </div>
          </div>
        </div>
        <div className="mockup-phone absolute left-[80px] top-[10px] z-[80]">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Splide
                options={{
                  arrows: false,
                  rewind: true,
                  pagination: false,
                  autoplay: true,
                }}
              >
                {imageList.map((img, index) => {
                  return (
                    <SplideSlide key={index}>
                      <img className="object-top object-fill" src={img}></img>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const userInfo = useContext(UserContext).userContext;
  const userStore = useContext(UserContext);
  const Logo = () => {
    return (
      <div
        onClick={() => {
          window.location = "/";
        }}
        className="text-5xl font-bold font-playball cursor-pointer text-black text-center"
      >
        CWFgram
      </div>
    );
  };
  useEffect(() => {
    if (window) window.history.replaceState(window.history.state, "", "/");
  }, []);
  const SwitchAccount = () => {
    return (
      <div className=" border border-gray-100 rounded-md bg-white ">
        <Logo />
        <div className="lightGrayDivider-sm !w-[95%] mx-auto"></div>
        {userInfo.user && (
          <div className="mx-4 my-4">
            <AvatarUsernameActionRow
              user={userInfo.user}
              isHide={true}
              actionBtn={
                <div
                  onClick={() => {
                    window.location = "/";
                  }}
                  className="btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm "
                >
                  Log In
                </div>
              }
            />
          </div>
        )}
        {userInfo.extraUser && (
          <div className="mx-4 my-4">
            <AvatarUsernameActionRow
              user={userInfo.extraUser}
              isHide={true}
              actionBtn={
                <div
                  onClick={() => {
                    window.location = "/";
                    let user = userInfo.user;
                    let extraUser = userInfo.extraUser;
                    let tempUser = user;
                    user = extraUser;
                    extraUser = tempUser;
                    localStorage.setItem(
                      "cwfUser",
                      JSON.stringify({ user, extraUser })
                    );
                    userStore.setUserByDispatch({
                      type: "switch",
                      value: { user, extraUser },
                    });
                  }}
                  className="btnText !py-[5px] !px-[9px] font-bold !bg-lightBlue !text-white !text-sm "
                >
                  Log In
                </div>
              }
            />
          </div>
        )}
        <div className="lightGrayDivider-sm !w-[95%] mx-auto"></div>
        <div className="!font-bold btnText mx-auto w-full !my-8 !text-lightBlue">
          Manage Account
        </div>
      </div>
    );
  };
  const SwitchAcSignUp = () => {
    return (
      <div className="border border-gray-100 rounded-md mt-5 bg-white">
        <div className="flex items-center w-full justify-center my-5">
          <div className="btnText !text-lightBlue !font-bold">
            Switch accounts
          </div>
          <div className="mx-1">or</div>
          <div className="btnText !text-lightBlue !font-bold">Sign up</div>
        </div>
      </div>
    );
  };
  const StoreImg = () => {
    return (
      <div className="flex justify-center">
        <img
          onClick={() => {
            window.open(personalWebsite);
          }}
          className="w-[136px] h-[40px] mr-2"
          src="/image/appStore.png"
        ></img>
        <img
          onClick={() => {
            window.open(personalWebsite);
          }}
          className="w-[136px] h-[40px]"
          src="/image/googlePlay.png"
        ></img>
      </div>
    );
  };
  return (
    <Base isHideAll={true}>
      <div className="flex mx-auto  w-[895px] items-start mt-[30px]">
        <div className="w-[454px]">
          <MockPhone />
        </div>
        <div className="flex flex-col w-[348px] mt-10">
          <SwitchAccount />
          <SwitchAcSignUp />
          <div className="mx-auto my-4">Get the app.</div>
          <StoreImg />
        </div>
      </div>
    </Base>
  );
};

export default LoginPage;
