import { Linkify, LinkifyCore } from "react-easy-linkify";
import ShowMoreText from "react-show-more-text";

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

const PostDesc = ({ desc ,isExpanded}) => {
  return (
    <div className="font-normal inline ml-1  ">
      <ShowMoreText
        lines={1}
        more="more"
        less=""
        className="inline"
        anchorClass="showMoreText"
        expanded={isExpanded??false}
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
