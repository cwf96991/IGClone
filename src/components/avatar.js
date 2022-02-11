import { faker } from "@faker-js/faker";

const Avatar = ({ size, isHighlight,img }) => {
  isHighlight = isHighlight ?? false;
  if (size == "56") {
    size = "!w-[56px] !h-[56px]";
  }else if (size=="32"){
    size = "!w-[32px] !h-[32px]";
  }
  return isHighlight ? (
    <div class="avatar carousel-item">
      <div
        class={`rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-700`}
      >
        <div className={`p-[2px] bg-white rounded-full `}>
          <img src={img} className={`rounded-full ${size}`} />
        </div>
      </div>
    </div>
  ) : (
    <div class="avatar ">
      <img src={img} className={`rounded-full ${size}`} />
    </div>
  );
};

export default Avatar;
