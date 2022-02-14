import VerifiedIcon from "@mui/icons-material/Verified";
const HomeSvg = () => {
  return (
    <svg
      aria-label="Home"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fill-black hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
    </svg>
  );
};
const MessengerSvg = () => {
  return (
    <svg
      aria-label="Messenger"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fill-black hover:fill-gray-300 group"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
        fill="none"
        className="stroke-black group-hover:stroke-gray-300"
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
      className="stroke-black hover:stroke-gray-300 group"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
        fill="none"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        className="stroke-black group-hover:stroke-gray-300"
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
        className="stroke-black group-hover:stroke-gray-300"
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
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="stroke-black hover:stroke-gray-300 group"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        fill="none"
        points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
      <polygon
        fillRule="evenodd"
        className="fill-black group-hover:fill-gray-300"
        points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
      ></polygon>
      <circle
        cx="12.001"
        cy="12.005"
        fill="none"
        r="10.5"
        className="stroke-black group-hover:stroke-gray-300"
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
      height={size ?? "24"}
      role="img"
      viewBox="0 0 24 24"
      width={size ?? "24"}
      className="fill-black hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
    </svg>
  );
};
const SearchSvg = () => {
  return (
    <svg
      aria-label="Search"
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
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

const MoreSvg = ({ size,color }) => {
  color = color??"fill-black"
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
const CommentSvg = () => {
  return (
    <svg
      aria-label="Comment"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fill-black group hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
        fill="none"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};
const MsgSvg = () => {
  return (
    <svg
      aria-label="Share Post"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fill-black group hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <line
        fill="none"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
const BookmarkSvg = () => {
  return (
    <svg
      aria-label="Save"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="fill-black group hover:fill-gray-300"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        className="stroke-black group-hover:stroke-gray-300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};
const BookmarkedSvg = () => {
  return (
    <svg
      aria-label="Remove"
      className="fill-black group hover:fill-gray-300"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
    </svg>
  );
};
const FavedSvg = ({ size }) => {
  return (
    <svg
      aria-label="Unlike"
      color="#ed4956"
      fill="#ed4956"
      width={size ?? "24"}
      height={size ?? "24"}
      role="img"
      viewBox="0 0 48 48"
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  );
};
const PlayBtnSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
    </svg>
  );
};
const EmojiSvg = () => {
  return (
    <svg
      aria-label="Emoji"
      className="fill-black group hover:fill-gray-300 react-input-emoji--button--icon"
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

const CrossSvg = () => {
  return (
    <svg
      aria-label="Close"
      class="_8-yf5 "
      color="#ffffff"
      fill="#ffffff"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      ></polyline>
      <line
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  );
};
export {
  CloseSvg,
  PlayBtnSvg,
  EmojiSvg,
  HomeSvg,
  MessengerSvg,
  BlueTickSvg,
  NewPostSvg,
  ExploreSvg,
  LeftArrow,
  RightArrow,
  FavSvg,
  FavedSvg,
  SearchSvg,
  MoreSvg,
  VerifyIcon,
  CommentSvg,
  CrossSvg,
  MsgSvg,
  BookmarkSvg,
  BookmarkedSvg,
};
