import Slider from "./slider";
const ImgSlider = ({ imgList }) => {
  return imgList.length == 1 ? (
    <img
      src={imgList[0]}
      className="w-full object-cover object-center aspect-square "
    />
  ) : (
    <Slider style={" carousel"}>
      {imgList.map((img, key) => {
        return (
          <div className=" carousel-item " key={key}>
            <img
              src={img}
              className="!w-full object-cover object-center aspect-square inline-block"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default ImgSlider;
