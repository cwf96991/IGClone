const ImageFilter = ({ text, filters,setFilters }) => {
  const isSelected = filters == text;
  return (
    <div 
    onClick={()=>{
        setFilters(text)
    }}
    className="flex flex-col cursor-pointer">
      <img
        src={`/filter/${text}.jpeg`}
        filter="sepia"
        className={`w-full h-auto aspect-square ${
          isSelected ? "rounded-sm border-lightBlue border-2 " : "border-2 border-transparent"
        }`}
      />
      <div className={`text-center font-medium text-xs mt-2 ${isSelected?"text-lightBlue":""}`}>{text}</div>
    </div>
  );
};

export default ImageFilter;
