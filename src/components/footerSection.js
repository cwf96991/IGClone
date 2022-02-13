import { personalWebsite, footerList } from "../utils/constant";

const FooterSection = () => {
    return (
      <div className="flex flex-wrap w-[325px] text-gray-100 text-2xs font-bold mt-6 mb-4">
        {footerList.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                window.open(personalWebsite);
              }}
              className="cursor-pointer"
            >
              {`${item}`}
              {index != footerList.length - 1 && (
                <div className="inline cursor-default">．</div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  export default FooterSection;