import { Meta } from "../layout/Meta";
import Navbar from "../components/Navbar";
import MobileNavBar from "../components/mobileNavBar";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import { Footer } from "./Footer";
import { AppConfig } from "../utils/AppConfig";
import { UserContext } from "../components/UserContext";
import useUser from "../hook/useUser";
import { useEffect, useContext } from "react";
import { useMobile768 } from "../hook/useMobile";
const Basic = (props) => {
  const title = props?.title === undefined ? "" : `${props?.title} | `;
  const userInfo = useContext(UserContext);
  const user = useUser();
  let showHeader = props?.showHeader ?? false;
  const isMobile = useMobile768();
  showHeader = isMobile ? showHeader : true;
  useEffect(() => {
    if (user) {
      userInfo.setUserByDispatch({ type: "switch", value: user });
    }
  }, [user]);
  return (
    <div className="antialiased text-black  font-sans bg-black md:bg-[#fafafa] flex flex-col w-screen noScrollBarMobile">
      <Meta
        title={`${title}${AppConfig.title}`}
        ogTitle={`${title}${AppConfig.ogTitle}`}
        description={AppConfig.description}
        canonical={AppConfig.url}
        ogDescription={AppConfig.ogDescription}
      />
      {showHeader && <Navbar user={props.user} />}

      {showHeader ? (
        <div className="mt-[62.5px]">{props.children}</div>
      ) : (
        <div className="">{props.children}</div>
      )}
      <MobileNavBar />
      {/* <div>
        footer
      </div> */}
      {/* <AnimationOnScroll animateIn="animate__fadeIn">
        <Footer />
      </AnimationOnScroll> */}
    </div>
  );
};
export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
export default Basic;
