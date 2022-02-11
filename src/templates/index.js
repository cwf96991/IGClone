import Base from "./Base";
import StorySlider from "../components/storySlider";
import Avatar from "../components/avatar";
import { faker } from "@faker-js/faker";
import { useMobile945 } from "../hook/useMobile";
import {
  MoreSvg,
  FavSvg,
  CommentSvg,
  MsgSvg,
  BookmarkSvg,
  FavedSvg,
} from "../components/image";
import Post from "../components/post";

const Index = () => {
  const isHideSidePanel = useMobile945();
  return (
    <Base>
      <div className="flex ">
        <div
          className={`${
            isHideSidePanel ? "mx-auto" : "ml-auto"
          } flex flex-col max-w-[620px]`}
        >
          <StorySlider />
          {[...Array(10)].map((item, key) => {
            const user = faker.helpers.createCard();
            user.isfav = faker.random.boolean();
            user.img = faker.image.image();
            user.avatar = faker.image.avatar();
            return <Post key={key} user={user} />;
          })}
        </div>
        {!isHideSidePanel && <div className="w-[325px] mr-auto">username</div>}
      </div>
    </Base>
  );
};
export default Index;
