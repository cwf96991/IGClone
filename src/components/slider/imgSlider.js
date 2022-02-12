import Slider from "./slider";
const ImgSlider = ({ imgList }) => {
  return imgList.length == 1 ? (
    <img
      src={imgList[0]}
      className="w-full object-cover object-center h-auto "
    />
  ) : (
    <Slider style={" carousel"} isPagination={true}>
      {imgList.map((img, key) => {
        return (
          <div
            className=" carousel-item !w-full object-cover object-center !aspect-square !block"
            key={key}
          >
            <img
              src={img}
              className="!w-full object-cover object-center !aspect-square !block "
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImgSlider;
