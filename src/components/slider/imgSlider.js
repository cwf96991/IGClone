import Slider from "./slider";
const ImgSlider = ({ imgList, isInside, imgStyle }) => {
  imgStyle =
    imgStyle ??
    (imgList.length == 1 ? "w-full h-auto " : "!w-full !aspect-square !block");
  let imgBaseStyle = "object-cover object-center ";
  return imgList.length == 1 ? (
    <img src={imgList[0]} className={`${imgBaseStyle} ${imgStyle}`} />
  ) : (
    <Slider style={" carousel"} isPagination={true} isInside={isInside}>
      {imgList.map((img, key) => {
        return (
          <div
            className={`carousel-item ${imgBaseStyle} ${imgStyle}`}
            key={key}
          >
            <img src={img} className={`${imgBaseStyle} ${imgStyle}`} />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImgSlider;
