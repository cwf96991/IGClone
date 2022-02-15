import { useState, useEffect } from "react";
import { getRandomUser } from "../utils/random";
import { truncateName } from "../utils/function";
import { AvatarUsernameActionRow } from "./post/postWidget";

const SuggestItem = ({ user }) => {
  const { isNew, follower, extraFollower } = user;
  const [isFollow, setIsFollow] = useState(false);
  return (
    <div className="w-[325px]">
      <AvatarUsernameActionRow
        user={user}
        isfollow={isFollow}
        descWidget={
          <div className="text-gray-300 text-xs font-bold">
            {isNew
              ? "New to CWFgram"
              : `Followed by ${truncateName(follower)} + ${extraFollower} more`}
          </div>
        }
        followCallback={(output) => {
          setIsFollow(output);
        }}
        actionBtn={
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
        }
      />
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
