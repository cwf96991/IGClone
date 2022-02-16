import { Img } from "react-image";

const ImageWidget = ({ img, placeholder, style }) => {
  return (
    <Img
      src={img}
      loader={placeholder}
      unloader={placeholder}
      className={style}
    />
  );
};
export default ImageWidget;
