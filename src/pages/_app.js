import App from "next/app";
import { NextIntlProvider } from "next-intl";
import "../styles/global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import UserStore from "../store/userStore";

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <UserStore>
        <Component {...pageProps} />
      </UserStore>
    </NextIntlProvider>
  );
};
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
