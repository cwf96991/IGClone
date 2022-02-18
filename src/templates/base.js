import { Meta } from "../layout/Meta";
import Navbar from "../components/Navbar";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import { Footer } from "./Footer";
import { AppConfig } from "../utils/AppConfig";
import { UserContext } from "../components/UserContext";
import useUser from "../hook/useUser";
import { useEffect, useContext } from "react";

const Basic = (props) => {
  const title = props?.title === undefined ? "" : `${props?.title} | `;
  const userInfo = useContext(UserContext);
  const user = useUser();
  useEffect(() => {
    if (user) {
      userInfo.setUserByDispatch({ type: "switch", value: user });
    }
  }, [user]);
  return (
    <div className="antialiased text-black  font-sans bg-[#fafafa] flex flex-col w-screen ">
      <Meta
        title={`${title}${AppConfig.title}`}
        ogTitle={`${title}${AppConfig.ogTitle}`}
        description={AppConfig.description}
        canonical={AppConfig.url}
        ogDescription={AppConfig.ogDescription}
      />
      <Navbar user={props.user} />

      <div className="mt-[62.5px]">{props.children}</div>
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
