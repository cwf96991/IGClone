import About from "../../templates/inboxMain";
const Index = () => <About />;
export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}
export default Index;
