import { Meta } from "../layout/Meta";
import Navbar from "../components/Navbar";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import { Footer } from "./Footer";
import { AppConfig } from "../utils/AppConfig";

const Basic = (props) => {
  const title = props?.title === undefined ? "" : `${props?.title} | `;
  return (
    <div className="antialiased text-black  font-sans bg-white flex flex-col w-screen ">
      <Meta
        title={`${title}${AppConfig.title}`}
        ogTitle={`${title}${AppConfig.ogTitle}`}
        description={AppConfig.description}
        canonical={AppConfig.url}
        ogDescription={AppConfig.ogDescription}
      />
      <Navbar />

      {props.children}
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
