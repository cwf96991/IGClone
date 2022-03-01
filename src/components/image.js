import VerifiedIcon from "@mui/icons-material/Verified";
const HomeSvg = () => {
  return (
    <svg
      aria-label="Home"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fillBlack hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
    </svg>
  );
};
const UnHomeSvg = () => {
  return (
    <svg
      aria-label="Home"
      className="fillBlack hover:fill-gray-300"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
        fill="none"
        className="strokeBlack hover:stroke-gray-300"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
const MessengerSvg = (color) => {
  color = color ?? "fillBlack";
  return (
    <svg
      aria-label="Messenger"
      className={`${color} hover:fill-gray-300 group`}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z"></path>
    </svg>
  );
};
const UnMessengerSvg = ({ color, stroke }) => {
  color = color ?? "fillBlack";
  stroke = stroke ?? "strokeBlack";
  return (
    <svg
      aria-label="Messenger"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className={`${color}  hover:fill-gray-300 group`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
        fill="none"
        className={`${stroke} group-hover:stroke-gray-300`}
        strokeMiterlimit="10"
        strokeWidth="1.739"
      ></path>
      <path
        d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
const NewPostSvg = () => {
  return (
    <svg
      aria-label="New post"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className=" hover:bg-gray-300 group bg-black rounded-lg"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
        fill="none"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        className="stroke-white "
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="6.545"
        x2="17.455"
        y1="12.001"
        y2="12.001"
      ></line>
      <line
        fill="none"
        className="stroke-white "
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="12.003"
        x2="12.003"
        y1="6.545"
        y2="17.455"
      ></line>
    </svg>
  );
};
const UnNewPostSvg = () => {
  return (
    <svg
      aria-label="New post"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="strokeBlack hover:stroke-gray-300 group"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
        fill="none"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="6.545"
        x2="17.455"
        y1="12.001"
        y2="12.001"
      ></line>
      <line
        fill="none"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="12.003"
        x2="12.003"
        y1="6.545"
        y2="17.455"
      ></line>
    </svg>
  );
};
const ExploreSvg = () => {
  return (
    <svg
      aria-label="Find people"
      className="fillBlack hover:fill-gray-300"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M13.173 13.164l1.491-3.829-3.83 1.49zM12.001.5a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012.001.5zm5.35 7.443l-2.478 6.369a1 1 0 01-.57.569l-6.36 2.47a1 1 0 01-1.294-1.294l2.48-6.369a1 1 0 01.57-.569l6.359-2.47a1 1 0 011.294 1.294z"></path>
    </svg>
  );
};
const UnExploreSvg = () => {
  return (
    <svg
      aria-label="Find people"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="strokeBlack hover:stroke-gray-300 group"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
      <polygon
        fillRule="evenodd"
        className="fillBlack group-hover:fill-gray-300"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};

const FavSvg = ({ size }) => {
  return (
    <svg
      aria-label="Activity Feed"
      className="fillBlack hover:fill-gray-300"
      height={size ?? "24"}
      role="img"
      viewBox="0 0 48 48"
      width={size ?? "24"}
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};
const WhiteFavSvg = ({ size, style }) => {
  style = style ?? "";
  return (
    <svg
      aria-label="Activity Feed"
      className={`fill-white ${style}`}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 48 48"
      width={size ?? "24"}
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};
const UnFavSvg = ({ size, color }) => {
  color = color ?? "fillBlack";
  return (
    <svg
      aria-label="Activity Feed"
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
      className={`${color} hover:fill-gray-300`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
    </svg>
  );
};
const SearchSvg = ({ size, stroke, color }) => {
  stroke = stroke ?? "stroke-[#8e8e8e]";
  color = color ?? "fill-[#8e8e8e]";
  return (
    <svg
      aria-label="Search"
      className={color}
      height={size ?? "16"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "16"}
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
        fill="none"
        className={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        className={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
};
const CloseSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="inline-block w-[16px] h-[16px] my-auto stroke-white rounded-full p-1 fill-white bg-gray-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};
const LeftArrow = () => {
  return (
    <svg
      className="fill-white drop-shadow-2xl"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
    </svg>
  );
};
const RightArrow = () => {
  return (
    <svg
      className="fill-white drop-shadow-2xl"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z" />
    </svg>
  );
};
const ArrowRight = () => {
  return (
    <svg
      aria-label="Chevron icon to see all follow requests"
      className="fill-gray-300 rotate-90"
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
    </svg>
  );
};
const MoreSvg = ({ size, color }) => {
  color = color ?? "fillBlack";
  return (
    <svg
      aria-label="More Options"
      className={color}
      width={size ?? "24"}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};
const CommentSvg = ({ isLoad, fill, stroke }) => {
  isLoad = isLoad ?? false;
  fill = fill ?? isLoad ? "fill-slate-200" : "fillBlack";
  stroke = stroke ?? isLoad ? "stroke-slate-200" : "strokeBlack";
  return (
    <svg
      aria-label="Comment"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className={`${fill} group hover:fill-gray-300`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="none"
        className={`${stroke} group-hover:stroke-gray-300`}
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
const CommentFillSvg = () => {
  return (
    <svg
      aria-label="Comment"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className={`fill-white`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="white"
        className={`stroke-white`}
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
const MsgSvg = ({ isLoad, size, isIgnore }) => {
  isLoad = isLoad ?? false;
  let fill = isLoad ? "fill-slate-200" : "fillBlack";
  let stroke = isLoad ? "stroke-slate-200" : "strokeBlack";
  return (
    <svg
      aria-label="Share Post"
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
      className={`${fill} group hover:fill-gray-300 mx-auto flex h-full items-center`}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <line
        fill="none"
        className={`${stroke} group-hover:stroke-gray-300`}
        strokeLinejoin="round"
        strokeWidth={isIgnore ? "0.8" : "2"}
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        className={`${stroke} group-hover:stroke-gray-300`}
        strokeLinejoin="round"
        strokeWidth={isIgnore ? "0.8" : "2"}
      ></polygon>
    </svg>
  );
};
const BookmarkSvg = ({ size }) => {
  return (
    <svg
      aria-label="Save"
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
      className="fillBlack group hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        className="strokeBlack group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
const BookmarkedSvg = ({ isLoad }) => {
  isLoad = isLoad ?? false;
  let fill = isLoad ? "fill-slate-200" : "fillBlack";
  return (
    <svg
      aria-label="Remove"
      className={`${fill} group hover:fill-gray-300`}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
    </svg>
  );
};
const BookmarkSmallSvg = ({ stroke }) => {
  stroke = stroke ?? "strokeBlack";
  return (
    <svg
      aria-label=""
      color="#8e8e8e"
      fill="#8e8e8e"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
    </svg>
  );
};
const FavedSvg = ({ size, color }) => {
  color = color ?? "fill-[#ed4956]";
  return (
    <svg
      aria-label="Unlike"
      className={color}
      width={size ?? "24"}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 48 48"
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};

const PlayBtnSvg = ({ size, style }) => {
  style = style ?? "";
  return (
    <svg
      aria-label="Video"
      className={`fill-white ${style}`}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
    >
      <path d="M5.888 22.5a3.46 3.46 0 01-1.721-.46l-.003-.002a3.451 3.451 0 01-1.72-2.982V4.943a3.445 3.445 0 015.163-2.987l12.226 7.059a3.444 3.444 0 01-.001 5.967l-12.22 7.056a3.462 3.462 0 01-1.724.462z"></path>
    </svg>
  );
};
const StackSvg = ({ size }) => {
  return (
    <svg
      aria-label="Carousel"
      className="fill-white"
      height={size ?? "28"}
      role="img"
      viewBox="0 0 48 48"
      width={size ?? "28"}
    >
      <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
    </svg>
  );
};
const EmojiSvg = () => {
  return (
    <svg
      aria-label="Emoji"
      className="fillBlack group hover:fill-gray-300 react-input-emoji--button--icon"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
    </svg>
  );
};
const BlueTickSvg = () => {
  return (
    <svg
      aria-label="Filled tick icon"
      color="#0095f6"
      fill="#0095f6"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm5.706 9.21l-6.5 6.495a1 1 0 01-1.414-.001l-3.5-3.503a1 1 0 111.414-1.414l2.794 2.796L16.293 8.3a1 1 0 011.414 1.415z"></path>
    </svg>
  );
};
const VerifyIcon = ({ size }) => {
  return (
    <VerifiedIcon className="text-lightBlue" sx={{ fontSize: size ?? 16 }} />
  );
};

const CrossSvg = ({ color, size }) => {
  color = color ?? "strokeBlack";
  return (
    <svg
      aria-label="Close"
      // className={color}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
    >
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        className={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></polyline>
      <line
        fill="none"
        className={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  );
};
const NewMsgSvg = () => {
  return (
    <svg
      aria-label="New message"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <path
        d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.848"
        x2="20.076"
        y1="3.924"
        y2="7.153"
      ></line>
    </svg>
  );
};
const ArrowDownSvg = ({ size, color }) => {
  color = color ?? "fillBlack";
  return (
    <svg
      aria-label="Down Chevron Icon"
      className={`${color} rotate-180`}
      height={size ?? "20"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "20"}
    >
      <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
    </svg>
  );
};
const ImageVideoSvg = () => {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      color="#262626"
      fill="#262626"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
const ImageVideoActiveSvg = () => {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      className="fill-lightBlue"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        className="fill-lightBlue"
      ></path>
      <path
        d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        className="fill-lightBlue"
      ></path>
      <path
        d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        className="fill-lightBlue"
      ></path>
    </svg>
  );
};
const ProfileSvg = () => {
  return (
    <svg
      aria-label="Profile"
      className="fillBlack"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <circle
        cx="12.004"
        cy="12.004"
        fill="none"
        r="10.5"
        className="strokeBlack"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></circle>
      <path
        d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
        fill="none"
        className="strokeBlack"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></path>
      <circle
        cx="12.006"
        cy="9.718"
        fill="none"
        r="4.109"
        className="strokeBlack"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};
const SettingSvg = ({ size }) => {
  return (
    <svg
      aria-label="Settings"
      className="fillBlack"
      height={size ?? "16"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "16"}
    >
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="8.635"
        className="strokeBlack"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
      <path
        d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
        fill="none"
        className="strokeBlack"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
const SwitchSvg = ({ size }) => {
  return (
    <svg
      aria-label="Switch accounts"
      className="fillBlack"
      height={size ?? "16"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "16"}
    >
      <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

const MuteSvg = () => {
  return (
    <svg
      aria-label="Audio is playing"
      color="#ffffff"
      fill="#ffffff"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z"></path>
    </svg>
  );
};
const UnMuteSvg = () => {
  return (
    <svg
      aria-label="Audio is muted."
      color="#ffffff"
      fill="#ffffff"
      height="12"
      role="img"
      viewBox="0 0 48 48"
      width="12"
    >
      <path
        clipRule="evenodd"
        d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
const UploadErrorSvg = () => {
  return (
    <svg
      aria-label="Icon to represent media such as images or videos"
      color="#262626"
      fill="#262626"
      height="96"
      role="img"
      viewBox="0 0 96 96"
      width="96"
    >
      <path d="M48 0c26.5 0 48 21.5 48 48S74.5 96 48 96 0 74.5 0 48 21.5 0 48 0zm0 2C22.6 2 2 22.6 2 48s20.6 46 46 46 46-20.6 46-46S73.4 2 48 2zm0 57.8c3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1s-6.1-2.7-6.1-6.1c0-3.3 2.7-6.1 6.1-6.1zm0 2c-2.3 0-4.1 1.8-4.1 4.1S45.7 70 48 70s4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zM48 23c3.5 0 6.4 2.8 6.1 6.2l-1.6 22.5c-.2 2.3-2.2 4-4.5 4-2.4 0-4.4-1.7-4.5-4l-1.6-22.5c-.3-3.4 2.6-6.2 6.1-6.2zm0 2c-2.4 0-4.3 1.9-4.1 4l1.6 22.5c.1 1.2 1.2 2.1 2.5 2.1s2.4-.9 2.5-2.1L52.1 29c.2-2.1-1.7-4-4.1-4z"></path>
    </svg>
  );
};

const BackBtnSvg = () => {
  return (
    <svg
      aria-label="Back"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="2.909"
        x2="22.001"
        y1="12.004"
        y2="12.004"
      ></line>
      <polyline
        fill="none"
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polyline>
    </svg>
  );
};
const SelectCropSvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Select Crop"
      className={color}
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M10 20H4v-6a1 1 0 00-2 0v7a1 1 0 001 1h7a1 1 0 000-2zM20.999 2H14a1 1 0 000 2h5.999v6a1 1 0 002 0V3a1 1 0 00-1-1z"></path>
    </svg>
  );
};

const ZoomSvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Select Zoom"
      className={color}
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M22.707 21.293l-4.825-4.825a9.519 9.519 0 10-1.414 1.414l4.825 4.825a1 1 0 001.414-1.414zM10.5 18.001a7.5 7.5 0 117.5-7.5 7.509 7.509 0 01-7.5 7.5zm3.5-8.5h-2.5v-2.5a1 1 0 10-2 0v2.5H7a1 1 0 100 2h2.5v2.5a1 1 0 002 0v-2.5H14a1 1 0 000-2z"></path>
    </svg>
  );
};
const GallerySvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Open Media Gallery"
      className={color}
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M19 15V5a4.004 4.004 0 00-4-4H5a4.004 4.004 0 00-4 4v10a4.004 4.004 0 004 4h10a4.004 4.004 0 004-4zM3 15V5a2.002 2.002 0 012-2h10a2.002 2.002 0 012 2v10a2.002 2.002 0 01-2 2H5a2.002 2.002 0 01-2-2zm18.862-8.773A.501.501 0 0021 6.57v8.431a6 6 0 01-6 6H6.58a.504.504 0 00-.35.863A3.944 3.944 0 009 23h6a8 8 0 008-8V9a3.95 3.95 0 00-1.138-2.773z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};
const OriginalSvg = ({ color, stroke }) => {
  color = color ?? "fill-white";
  stroke = stroke ?? "stroke-white";
  return (
    <svg
      aria-label="Photo outline icon"
      className={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z"
        fill-rule="evenodd"
      ></path>
      <path
        d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905"
        fill="none"
        className={stroke}
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <path
        d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z"
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  );
};
const SquareSvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Crop square icon"
      className={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M19 23H5a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM5 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path>
    </svg>
  );
};

const PortraitSvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Crop portrait icon"
      className={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M16 23H8a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h8a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM8 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h8a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"></path>
    </svg>
  );
};
const LandscapeSvg = ({ color }) => {
  color = color ?? "fill-white";
  return (
    <svg
      aria-label="Crop landscape icon"
      className={color}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M19 20H5a4.004 4.004 0 01-4-4V8a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v8a4.004 4.004 0 01-4 4zM5 6a2.002 2.002 0 00-2 2v8a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V8a2.002 2.002 0 00-2-2z"></path>
    </svg>
  );
};

const PlusSvg = () => {
  return (
    <svg
      aria-label="Plus icon"
      class="fill-gray-300"
      height="22"
      role="img"
      viewBox="0 0 24 24"
      width="22"
    >
      <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
    </svg>
  );
};

const LocationPinSvg = () => {
  return (
    <svg
      aria-label="Add Location"
      class="_8-yf5 "
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M12.053 8.105a1.604 1.604 0 101.604 1.604 1.604 1.604 0 00-1.604-1.604zm0-7.105a8.684 8.684 0 00-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 001.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0012.053 1zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0113.417 0c0 3.985-3.944 8.538-6.709 11.002z"></path>
    </svg>
  );
};

const GridSvg = ({ color, stroke }) => {
  color = color ?? "fill-black";
  stroke = stroke ?? "strokeBlack";
  return (
    <svg
      aria-label=""
      className={color}
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <rect
        fill="none"
        height="18"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        width="18"
        x="3"
        y="3"
      ></rect>
      <line
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="9.015"
        x2="9.015"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="14.985"
        x2="14.985"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="21"
        x2="3"
        y1="9.015"
        y2="9.015"
      ></line>
      <line
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        x1="21"
        x2="3"
        y1="14.985"
        y2="14.985"
      ></line>
    </svg>
  );
};
const TaggedSvg = ({ stroke }) => {
  stroke = stroke ?? "strokeBlack";
  return (
    <svg
      aria-label=""
      class="_8-yf5 "
      color="#8e8e8e"
      fill="#8e8e8e"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <path
        d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <path
        d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
        fill="none"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <circle
        cx="12.072"
        cy="11.075"
        fill="none"
        r="3.556"
        className={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></circle>
    </svg>
  );
};
const VideoSvg = ({ color }) => {
  color = color ?? "fillBlack";
  return (
    <svg
      aria-label=""
      className={color}
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path>
    </svg>
  );
};
const FlashLightSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className="fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="flash">
          <rect width="24" height="24" opacity="0" />
          <path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z" />
        </g>
      </g>
    </svg>
  );
};
const FlashLightOffSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      className="fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="flash-off">
          <rect width="24" height="24" opacity="0" />
          <path d="M17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11z" />
          <path d="M6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67z" />
          <path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
        </g>
      </g>
    </svg>
  );
};
const LetterASvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 32 32"
      id="icon"
      className="fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25,12H20v2h5a1.0008,1.0008,0,0,1,1,1v2H22a3.0033,3.0033,0,0,0-3,3v1a3.0033,3.0033,0,0,0,3,3h6V15A3.0033,3.0033,0,0,0,25,12ZM22,22a1.0008,1.0008,0,0,1-1-1V20a1.0008,1.0008,0,0,1,1-1h4v3Z" />
      <path d="M16,24h2L12,7H10L4,24H6l1.6936-5h6.6135ZM8.3711,17l2.4966-7.3711.2668.0005L13.63,17Z" />
      <rect
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        className="fill-transparent"
        width="24"
        height="24"
      />
    </svg>
  );
};

const InfiniteSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 596.416 596.416"
      className="fill-white"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M136.363,434.07c36.291,0,70.408-14.132,96.069-39.793l65.776-65.776l65.776,65.776
     c25.661,25.661,59.779,39.793,96.069,39.793c36.291,0,70.408-14.133,96.069-39.793c25.661-25.661,39.793-59.779,39.793-96.069
     c0-36.291-14.132-70.408-39.793-96.069s-59.778-39.793-96.069-39.793c-36.29,0-70.408,14.132-96.069,39.793l-65.776,65.777
     l-65.776-65.776c-25.661-25.661-59.779-39.793-96.069-39.793c-36.291,0-70.408,14.132-96.069,39.793
     C14.632,227.8,0.5,261.918,0.5,298.209c0,36.289,14.132,70.407,39.793,96.068C65.955,419.938,100.072,434.07,136.363,434.07z
      M394.277,232.431c17.569-17.569,40.93-27.246,65.776-27.246c24.848,0,48.207,9.676,65.776,27.246
     c17.57,17.569,27.247,40.93,27.247,65.777c0,24.847-9.677,48.206-27.247,65.776c-17.569,17.569-40.929,27.246-65.776,27.246
     c-24.847,0-48.207-9.677-65.776-27.246L328.5,298.208L394.277,232.431z M70.586,232.431
     c17.569-17.569,40.929-27.246,65.776-27.246s48.207,9.676,65.776,27.246l65.777,65.777l-65.778,65.777
     c-17.569,17.569-40.929,27.245-65.776,27.245s-48.208-9.676-65.777-27.245c-17.569-17.57-27.245-40.93-27.245-65.776
     C43.341,273.361,53.016,250.001,70.586,232.431z"
          />
          <path
            d="M460.054,434.57c-36.424,0-70.668-14.184-96.423-39.939l-65.423-65.423l-65.422,65.423
     c-25.755,25.756-59.999,39.939-96.423,39.939s-70.667-14.184-96.423-39.939C14.184,368.875,0,334.632,0,298.209
     c0-36.424,14.184-70.668,39.939-96.423c25.756-25.755,60-39.939,96.423-39.939c36.424,0,70.667,14.184,96.423,39.939
     l65.423,65.423l65.423-65.423c25.756-25.755,59.999-39.939,96.423-39.939s70.668,14.184,96.423,39.939
     s39.939,59.999,39.939,96.423s-14.185,70.668-39.939,96.423C530.721,420.387,496.477,434.57,460.054,434.57z M298.208,327.794
     l66.13,66.13c25.566,25.566,59.559,39.646,95.716,39.646c36.156,0,70.148-14.08,95.716-39.646
     c25.566-25.566,39.646-59.559,39.646-95.716c0-36.157-14.08-70.149-39.646-95.716s-59.559-39.646-95.716-39.646
     c-36.156,0-70.148,14.08-95.716,39.646l-66.13,66.13l-66.13-66.13c-25.566-25.566-59.559-39.646-95.716-39.646
     c-36.156,0-70.149,14.08-95.716,39.646C15.08,228.059,1,262.052,1,298.209c0,36.155,14.08,70.147,39.646,95.715
     c25.567,25.566,59.56,39.646,95.716,39.646s70.149-14.08,95.716-39.646L298.208,327.794z M460.054,391.73
     c-24.98,0-48.466-9.729-66.13-27.393l-66.131-66.13l66.131-66.13c17.664-17.664,41.149-27.392,66.13-27.392
     s48.466,9.728,66.13,27.392c17.665,17.664,27.394,41.149,27.394,66.13c0,24.979-9.729,48.465-27.394,66.13
     C508.52,382.002,485.034,391.73,460.054,391.73z M329.207,298.208l65.424,65.423c17.476,17.476,40.71,27.1,65.423,27.1
     s47.947-9.624,65.423-27.1c17.476-17.477,27.101-40.71,27.101-65.423c0-24.714-9.625-47.948-27.101-65.423
     s-40.71-27.099-65.423-27.099s-47.947,9.624-65.423,27.099L329.207,298.208z M136.362,391.73c-24.981,0-48.467-9.728-66.13-27.392
     s-27.391-41.149-27.391-66.13c0-24.982,9.728-48.468,27.392-66.131c17.664-17.664,41.149-27.392,66.13-27.392
     s48.466,9.728,66.13,27.392l66.131,66.13l-66.131,66.131C184.829,382.003,161.343,391.73,136.362,391.73z M136.363,205.686
     c-24.713,0-47.948,9.624-65.423,27.099c-17.475,17.475-27.099,40.709-27.099,65.424c0,24.713,9.624,47.947,27.098,65.423
     c17.475,17.475,40.709,27.099,65.423,27.099s47.948-9.624,65.423-27.099l65.424-65.424l-65.424-65.423
     C184.311,215.31,161.076,205.686,136.363,205.686z"
          />
        </g>
      </g>
    </svg>
  );
};

const LayoutSvg = () => {
  return (
    <svg
      width="24px"
      height="24px"
      className="scale-x-[-1] rotate-[-90deg]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="ic-layout-left-menu"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        className="fill-transparent stroke-white "
      >
        <rect class="cls-1" x="2" y="2" width="20" height="20" rx="2" />
        <line class="cls-1" x1="2" y1="10" x2="22" y2="10" />
        <line class="cls-1" x1="10" y1="10" x2="10" y2="22" />
      </g>
    </svg>
  );
};
const HandFreeSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="24px"
      y="24px"
      viewBox="0 0 30.05 30.05"
      className="w-6 h-6"
    >
      <g>
        <path
          className="fill-white"
          d="M18.993,10.688h-7.936c-0.19,0-0.346,0.149-0.346,0.342v8.022c0,0.189,0.155,0.344,0.346,0.344
		h7.936c0.19,0,0.344-0.154,0.344-0.344V11.03C19.336,10.838,19.183,10.688,18.993,10.688z"
        />
        <path
          className="fill-white"
          d="M15.026,0C6.729,0,0.001,6.726,0.001,15.025S6.729,30.05,15.026,30.05
		c8.298,0,15.023-6.726,15.023-15.025S23.324,0,15.026,0z M15.026,27.54c-6.912,0-12.516-5.604-12.516-12.515
		c0-6.914,5.604-12.517,12.516-12.517c6.913,0,12.514,5.603,12.514,12.517C27.54,21.936,21.939,27.54,15.026,27.54z"
        />
      </g>
    </svg>
  );
};

const MultiCapture = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      className="w-6 h-6 fill-white"
    >
      <g>
        <g>
          <g>
            <path
              d="M146.125,119.398c5.444,0,10.615-2.628,13.815-7.031c5.53-7.612,3.831-18.304-3.789-23.842
       c-7.347-5.333-18.5-3.55-23.834,3.789c-5.521,7.62-3.823,18.304,3.789,23.834C139.034,118.272,142.507,119.398,146.125,119.398z"
            />
            <path
              d="M65.877,299.196c-3.686,2.688-6.118,6.639-6.827,11.145s0.375,9.011,3.063,12.689c3.2,4.403,8.354,7.031,13.807,7.031
       c3.618,0,7.083-1.118,10.035-3.26c7.586-5.53,9.284-16.222,3.755-23.842C84.395,295.629,73.207,293.845,65.877,299.196z
        M75.921,321.527l-0.009-8.525l0.017-0.009L75.921,321.527z"
            />
            <path
              d="M503.467,494.933H256C124.245,494.933,17.067,387.746,17.067,256C17.067,124.245,124.245,17.067,256,17.067
       c131.746,0,238.933,107.179,238.933,238.933c0,84.326-43.128,160.785-115.354,204.527c-4.036,2.441-5.325,7.689-2.884,11.725
       c2.449,4.036,7.723,5.316,11.716,2.876C465.792,428.271,512,346.342,512,256C512,114.842,397.158,0,256,0S0,114.842,0,256
       s114.842,256,256,256h247.467c4.71,0,8.533-3.823,8.533-8.533C512,498.748,508.177,494.933,503.467,494.933z"
            />
            <path
              d="M126.157,282.095c29.653,0,55.748-18.97,64.922-47.198c11.622-35.797-8.03-74.385-43.836-86.016
       c-6.852-2.227-13.952-3.354-21.103-3.354c-29.662,0-55.74,18.961-64.913,47.181c-11.631,35.797,8.03,74.394,43.827,86.033
       C111.906,280.96,119.006,282.095,126.157,282.095z M77.466,197.982c6.869-21.171,26.428-35.388,48.674-35.388
       c5.359,0,10.684,0.845,15.838,2.517c26.846,8.721,41.583,37.666,32.87,64.512c-6.886,21.171-26.453,35.405-48.691,35.405
       c-5.359,0-10.684-0.853-15.829-2.526C83.482,253.781,68.736,224.836,77.466,197.982z"
            />
            <path
              d="M254.558,461.952c1.792,0,3.567-0.282,5.282-0.836c8.934-2.91,13.85-12.552,10.957-21.513
       c-2.85-8.755-12.74-13.807-21.513-10.948c-4.326,1.408-7.851,4.412-9.933,8.482c-2.065,4.062-2.432,8.687-1.024,13.013
       C240.614,457.207,247.125,461.952,254.558,461.952z"
            />
            <path
              d="M135.62,421.675c11.75,8.542,25.617,13.047,40.09,13.047c21.803,0,42.462-10.522,55.279-28.143
       c22.11-30.464,15.334-73.233-15.113-95.36c-11.75-8.533-25.609-13.039-40.073-13.039c-21.82,0-42.47,10.522-55.27,28.143
       c-10.726,14.754-15.061,32.794-12.211,50.799C111.172,395.136,120.866,410.957,135.62,421.675z M134.332,336.358
       c9.609-13.227,25.105-21.111,41.472-21.111c10.846,0,21.231,3.379,30.046,9.779c22.827,16.589,27.904,48.683,11.332,71.518
       c-9.609,13.227-25.114,21.112-41.472,21.112c-10.846,0-21.239-3.388-30.054-9.788c-11.068-8.038-18.347-19.908-20.489-33.408
       C123.034,360.951,126.285,347.418,134.332,336.358z"
            />
            <path
              d="M336.299,434.722h0.009c14.464,0,28.322-4.514,40.064-13.047c30.447-22.118,37.231-64.896,15.104-95.351
       c-12.8-17.63-33.468-28.143-55.279-28.143c-14.473,0-28.331,4.506-40.073,13.039c-30.455,22.127-37.231,64.896-15.104,95.351
       C293.82,424.201,314.487,434.714,336.299,434.722z M306.15,325.026c8.815-6.4,19.191-9.779,30.046-9.779
       c16.358,0,31.863,7.893,41.472,21.103c16.597,22.844,11.511,54.929-11.332,71.518c-8.806,6.4-19.191,9.788-30.029,9.788h-0.009
       c-16.367,0-31.872-7.893-41.481-21.12C278.238,373.7,283.315,341.615,306.15,325.026z"
            />
            <path
              d="M221.867,256c0,18.816,15.3,34.133,34.133,34.133c18.825,0,34.133-15.317,34.133-34.133
       c0-18.825-15.309-34.133-34.133-34.133C237.167,221.867,221.867,237.175,221.867,256z M273.067,256
       c0,9.412-7.663,17.067-17.067,17.067c-9.412,0-17.067-7.654-17.067-17.067c0-9.412,7.654-17.067,17.067-17.067
       C265.404,238.933,273.067,246.588,273.067,256z"
            />
            <path
              d="M368.188,121.088c7.424,0,13.952-4.745,16.222-11.793c2.91-8.943-1.997-18.594-10.982-21.513
       c-8.789-2.833-18.645,2.227-21.47,10.982c-2.901,8.943,2.022,18.586,10.965,21.487
       C364.629,120.806,366.404,121.088,368.188,121.088z"
            />
            <path
              d="M320.913,234.897c9.173,28.228,35.26,47.189,64.913,47.189c7.151,0,14.251-1.135,21.111-3.354
       c17.348-5.641,31.462-17.69,39.731-33.929c8.286-16.247,9.737-34.748,4.105-52.096c-9.173-28.228-35.26-47.189-64.913-47.189
       c-7.151,0-14.251,1.126-21.112,3.354C328.951,160.512,309.291,199.1,320.913,234.897z M370.022,165.103
       c5.154-1.673,10.479-2.517,15.838-2.517c22.238,0,41.796,14.225,48.674,35.396c4.233,13.013,3.149,26.889-3.063,39.066
       c-6.221,12.186-16.794,21.222-29.798,25.446c-5.163,1.681-10.487,2.526-15.846,2.526c-22.238,0-41.796-14.225-48.683-35.396
       C328.431,202.778,343.177,173.833,370.022,165.103z"
            />
            <path
              d="M256,51.2c-37.649,0-68.267,30.618-68.267,68.267c0,37.64,30.618,68.267,68.267,68.267
       c37.641,0,68.267-30.626,68.267-68.267C324.267,81.818,293.641,51.2,256,51.2z M256,170.667c-28.237,0-51.2-22.972-51.2-51.2
       c0-28.237,22.963-51.2,51.2-51.2c28.228,0,51.2,22.963,51.2,51.2C307.2,147.695,284.228,170.667,256,170.667z"
            />
            <path
              d="M418.133,315.733c0,9.412,7.654,17.067,17.067,17.067c9.404,0,17.067-7.654,17.067-17.067
       c0-9.412-7.663-17.067-17.067-17.067C425.788,298.667,418.133,306.321,418.133,315.733z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const LevelSvg = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-white"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path
            d="M381.973,233.412c-9.367-52.576-50.808-94.017-103.385-103.385V90.353h-45.177v39.674
     c-52.576,9.367-94.017,50.808-103.385,103.385H0v45.177h130.027c9.367,52.576,50.808,94.017,103.385,103.385v39.674h45.177
     v-39.674c52.576-9.367,94.017-50.808,103.385-103.385H512v-45.177H381.973z M256,338.824c-37.838,0-69.807-25.514-79.667-60.235
     h159.334C325.807,313.309,293.838,338.824,256,338.824z M176.333,233.412c9.86-34.721,41.829-60.235,79.667-60.235
     s69.807,25.514,79.667,60.235H176.333z"
          />
        </g>
      </g>
      <g>
        <g>
          <rect x="233.412" width="45.177" height="45.176" />
        </g>
      </g>
      <g>
        <g>
          <rect x="233.412" y="466.824" width="45.177" height="45.176" />
        </g>
      </g>
    </svg>
  );
};
export {
  CloseSvg,
  PlayBtnSvg,
  StackSvg,
  EmojiSvg,
  HomeSvg,
  UnHomeSvg,
  MessengerSvg,
  UnMessengerSvg,
  BlueTickSvg,
  ArrowDownSvg,
  NewPostSvg,
  UnNewPostSvg,
  ExploreSvg,
  UnExploreSvg,
  LeftArrow,
  RightArrow,
  ArrowRight,
  FavSvg,
  UnFavSvg,
  WhiteFavSvg,
  ProfileSvg,
  FavedSvg,
  SearchSvg,
  MoreSvg,
  VerifyIcon,
  CommentSvg,
  CommentFillSvg,
  CrossSvg,
  NewMsgSvg,
  MsgSvg,
  BookmarkSvg,
  BookmarkSmallSvg,
  SwitchSvg,
  SettingSvg,
  BookmarkedSvg,
  ImageVideoSvg,
  ImageVideoActiveSvg,
  MuteSvg,
  UnMuteSvg,
  UploadErrorSvg,
  BackBtnSvg,
  SelectCropSvg,
  ZoomSvg,
  GallerySvg,
  OriginalSvg,
  SquareSvg,
  PortraitSvg,
  LandscapeSvg,
  PlusSvg,
  LocationPinSvg,
  GridSvg,
  TaggedSvg,
  VideoSvg,
  FlashLightSvg,
  FlashLightOffSvg,
  LetterASvg,
  InfiniteSvg,
  LayoutSvg,
  HandFreeSvg,
  MultiCapture,
  LevelSvg,
};
