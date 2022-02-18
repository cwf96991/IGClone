import About from "../../templates/profile";
const Index = () => <About />;
export function getServerSideProps({ locale }) {
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

export default Index;
