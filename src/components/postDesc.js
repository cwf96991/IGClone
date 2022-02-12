import { Linkify, LinkifyCore } from "react-easy-linkify";
import ShowMoreText from "react-show-more-text";
import React, { useState, useEffect, useRef } from "react";

import { faker } from "@faker-js/faker";
import {
  randomEmoji,
  getRandomUsername,
  getRandomHashTag,
} from "../utils/random";
// The RegExp is char sets of Chinese, Japanese and Korean
LinkifyCore.addCharsSupport(/[\u2E80-\u9FFF]/);

// Advanced: You can inject or change something before the plugins enabled.
LinkifyCore.PluginManager.Plugins.hashtag.initAdpters.push((init, linkify) => {
  return init;
});

// Enable the plugins
LinkifyCore.PluginManager.enableMention();
LinkifyCore.PluginManager.enableHashtag();
LinkifyCore.PluginManager.enableTicket();

function mergeText(text1, text2) {
  let textList = text1.split(" ");
  let index = faker.datatype.number(textList.length - 1);
  textList.splice(index, 0, text2);
  return textList.join(" ");
}

const PostDesc = () => {
  const [desc, setDesc] = useState();
  useEffect(() => {
    let tempDesc = mergeText(faker.lorem.paragraph(), randomEmoji());
    for (let index = 0; index < faker.datatype.number(4); index++) {
      tempDesc = mergeText(tempDesc, randomEmoji());
    }
    for (let index = 0; index < faker.datatype.number(3); index++) {
      tempDesc = mergeText(tempDesc, `@${getRandomUsername()}`);
    }
    for (let index = 0; index < faker.datatype.number(5); index++) {
      tempDesc = mergeText(tempDesc, getRandomHashTag());
    }
    setDesc(tempDesc);
  },[]);
  return (
    <div className="font-normal inline ml-1  ">
      <ShowMoreText
        lines={1}
        more="more"
        less=""
        className="inline"
        anchorClass="showMoreText"
        expanded={false}
        truncatedEndingComponent={"... "}
      >
        <Linkify
          options={{
            nl2br: true,
            linkWrapper: {
              mention: (props) => <a {...props}>{props.children}</a>,
              hashtag: (props) => <a {...props}>{props.children}</a>,
            },
            formatHref: {
              mention: (href) => "/user" + href,
              hashtag: (href) => "/tag" + href.substring(1),
            },
          }}
        >
          {desc}
        </Linkify>
      </ShowMoreText>
    </div>
  );
};

export default PostDesc;
