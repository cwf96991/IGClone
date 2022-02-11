import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../utils/AppConfig";

const Meta = (props) => {
  
  const favIcon = "/icon.ico"
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          type="image/x-icon" href={favIcon}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          type="image/x-icon" href={favIcon}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          type="image/x-icon" href={favIcon}
          key="icon16"
        />
        <link
          rel="icon"
          type="image/x-icon" href={favIcon}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: AppConfig.image,
              width: 192,
              height: 192,
              alt: AppConfig.site_name,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
