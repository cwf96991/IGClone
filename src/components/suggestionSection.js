import { useState, useEffect, useRef } from "react";
import { getRandomUser } from "../utils/random";
import Avatar from "./avatar";
import { truncateName } from "../utils/function";
import { UserInfoPopUp } from "./post/postWidget";
const SuggestItem = ({ user }) => {
  const { avatar, isNFT, username,  isNew, follower, extraFollower } =
    user;
  const [isFollow, setIsFollow] = useState(false);
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center w-[325px]">
        <UserInfoPopUp
          user={user}
          isFollow={isFollow}
          isFollowOnly={true}
          followCallback={() => {
            setIsFollow(true);
          }}
        >
          <Avatar size={"32"} isHighlight={false} img={avatar} isNFT={isNFT} />
        </UserInfoPopUp>

        <div className="flex flex-row items-center justify-between grow">
          <div className="flex flex-col text-sm ml-4 grow">
            <UserInfoPopUp
              user={user}
              isFollow={isFollow}
              isFollowOnly={true}
              followCallback={() => {
                setIsFollow(true);
              }}
            >
              <div className="font-bold ">{username}</div>
            </UserInfoPopUp>

            <div className="text-gray-300 text-xs font-bold">
              {isNew
                ? "New to CWFgram"
                : `Followed by ${truncateName(
                    follower
                  )} + ${extraFollower} more`}
            </div>
          </div>

          <div
            onClick={() => {
              if (!isFollow) {
                setIsFollow(true);
              }
            }}
            className={`btnText ${
              isFollow ? "text-black" : "!text-lightBlue"
            } !text-xs`}
          >
            {isFollow ? "Following" : "Follow"}
          </div>
        </div>
      </div>
    </div>
  );
};
const SuggestionSection = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let index = 0; index < 5; index++) {
      let user = getRandomUser();
      list.push(user);
    }

    setSuggestionList(list);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between w-[325px]">
        <div className="font-bold text-sm text-gray-300 my-4 ">
          Suggestions for you
        </div>
        <div className="font-bold text-sm cursor-pointer">See All</div>
      </div>
      {suggestionList &&
        suggestionList.length != 0 &&
        suggestionList.map((user, index) => {
          return <SuggestItem user={user} key={index} />;
        })}
    </div>
  );
};
export default SuggestionSection;
