import Base from "./base";
import { StorySlider } from "../components/slider";
import { useMobile945 } from "../hook/useMobile";
import { useState, useEffect, useRef } from "react";
import { getRandomUser } from "../utils/random";
import PostList from "../components/post";
import UserList from "../components/userPanel";
const Index = () => {
  const isHideSidePanel = useMobile945();
  const [user, setUser] = useState({});
  
  function fetchData() {
    let user = getRandomUser();
    setUser(user);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Base user={user}>
      <div className="flex ">
        <div
          className={`${
            isHideSidePanel ? "mx-auto" : "ml-auto"
          } flex flex-col max-w-full md:max-w-[620px]`}
        >
          <StorySlider />
          <PostList currentUser ={user}/>
        </div>
        {!isHideSidePanel && (
          <div className="w-[325px] mr-auto">
            <UserList
              user={user}
              setUser={(user) => {
                setUser(user);
              }}
            />
          </div>
        )}
      </div>
    </Base>
  );
};
export default Index;
