import { emojis, gifs, videos, videosPlaceholder } from "./constant";
import { faker } from "@faker-js/faker";
import axios from "axios";
function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}
function randomVideo() {
  let index = Math.floor(Math.random() * videos.length);

  return {
    video: videos[index],
    placeholder: videosPlaceholder[index],
  };
}
function getRandomUsername(fixedName) {
  const name = faker.name.findName();
  const username = faker.internet.userName(fixedName ?? name);
  return username;
}
// function getRandomNickName() {
//   let isMale = faker.datatype.boolean();
//   let firstName = faker.name.firstName(isMale);
//   return faker.name.findName(firstName);
// }
function getRandomHashTag() {
  let tempHashTag = faker.word.noun();
  return (
    "#" +
    faker.word.adjective() +
    tempHashTag.charAt(0).toUpperCase() +
    tempHashTag.slice(1)
  );
}

async function getRandomdGif() {
  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
    tag: "fail",
    type: "random",
    rating: "pg-13",
  };

  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.apiKey +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
  );

  const response = await axios.get(giphyURL);
  let result = response.data.data.images.original.url;

  return result;
}
function mergeText(text1, text2) {
  let textList = text1.split(" ");
  let index = faker.datatype.number(textList.length - 1);
  textList.splice(index, 0, text2);
  return textList.join(" ");
}
function getRandomPostDesc() {
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
  return tempDesc;
}
function getRandomUser(username) {
  const user = faker.helpers.createCard();
  const isNew = faker.datatype.boolean();
  const follower = getRandomUsername();
  const extraFollower = faker.datatype.number(100);
  let fdIsNFT = faker.datatype.boolean();
  let fdAvatar = faker.image.avatar();
  let fdUsername = getRandomUsername();
  user.avatar = faker.image.avatar();
  user.isNFT = faker.datatype.boolean();
  user.isHighlight = faker.datatype.boolean();
  user.username = username ?? getRandomUsername(user.name);
  user.isNew = isNew;
  user.follower = follower;
  user.isWebsite = faker.datatype.boolean();
  user.isClosedFD = faker.datatype.boolean();
  user.extraFollower = extraFollower;
  user.isFollowing = faker.datatype.boolean();
  user.isVerify = faker.datatype.boolean();
  user.postCount = faker.datatype.number(1000);
  user.userId = faker.datatype.uuid();
  user.followerCount = faker.datatype.number();
  user.followingCount = faker.datatype.number();
  user.isActive = faker.datatype.boolean();
  user.isTag = faker.datatype.boolean();
  user.isPrivate = faker.datatype.boolean();
  user.isVideo = faker.datatype.boolean();
  user.lastActiveTime = faker.datatype.number(23, { min: 0 });
  let tempImgList = [];
  for (let index = 0; index < 3; index++) {
    tempImgList.push(faker.image.image());
  }
  user.postImages = tempImgList;
  user.fd = {
    isNFT: fdIsNFT,
    avatar: fdAvatar,
    username: fdUsername,
    isMultiple: faker.datatype.boolean(),
    avatar2: faker.image.avatar(),
    avatar3: faker.image.avatar(),
  };
  let wordCount = faker.datatype.number(20, { min: 5 });
  let emoji = randomEmoji();
  let words = faker.lorem.sentence(wordCount);
  let text = mergeText(words, emoji);
  user.bio = text;
  return user;
  // const {
  //   username,
  //   avatar,
  //   isNFT,
  //   isHighlight,
  //   isFollowing,
  //   isVerify,
  //   name,
  //   follower,
  //   extraFollower,
  //   isWebsite,
  //   website,
  //   isNew,
  //   postCount,
  //   followerCount,
  //   followingCount,
  //   postImages,
  // } = user;
}
function getRandomUserList() {
  let list = [];
  for (let index = 0; index < 20; index++) {
    list.push(getRandomUser());
  }
  return list;
}
function randomGifs() {
  return gifs[Math.floor(Math.random() * gifs.length)];
}
function getRandomComment(needReply, time) {
  let wordCount = faker.datatype.number(20, { min: 5 });
  let emoji = randomEmoji();
  let words = faker.lorem.sentence(wordCount);
  let text = mergeText(words, emoji);
  let isLike = faker.datatype.boolean();
  let isReply = faker.datatype.boolean();

  let user = getRandomUser();
  let postTime = faker.datatype.number(time, { min: 1 });
  let replyCount = faker.datatype.number(3, { min: 0 });
  let likeCount = faker.datatype.number(333);
  let commentId = faker.datatype.uuid();

  let replyList = [];
  if (needReply && isReply) {
    for (let index = 0; index < replyCount; index++) {
      replyList.push(getRandomComment(false, time));
    }
  }

  let comment = {
    text,
    isLike,
    isReply,
    commentId,
    replyList,
    user,
    postTime,
    likeCount,
    isOwner: false,
  };

  return comment;
}
async function getRandomPostList(isVideo, count, user) {
  isVideo = isVideo ?? faker.datatype.boolean();
  count = count ?? 5;
  let list = [];
  for (let index = 0; index < count; index++) {
    let postUser = getRandomUser();

    let post = {};
    post.isfav = faker.datatype.boolean();
    post.isVideo = isVideo;
    let tempImgList = [];
    if (isVideo) {
      let url = randomVideo();
      post.video = url;
      post.viewCount = faker.datatype.number();
    } else {
      for (let index = 0; index < faker.mersenne.rand(1, 10); index++) {
        if (faker.datatype.boolean()) {
          tempImgList.push(faker.image.image());
        } else {
          // let url = randomGifs();
          let url = await getRandomdGif();
          tempImgList.push(url);
        }
      }
    }

    post.imgList = tempImgList;
    post.commentCount = faker.datatype.number(1000);
    post.likeCount = faker.datatype.number();
    post.isFdLiked = faker.datatype.boolean();
    post.isAddress = faker.datatype.boolean();
    post.address = faker.address.streetAddress(true);
    post.isbookmark = faker.datatype.boolean();
    post.postDesc = getRandomPostDesc();
    post.postHash = faker.finance.ethereumAddress();
    post.likedUser = getRandomUser();
    post.postId = faker.datatype.uuid();
    post.postTime = faker.datatype.number(23, { min: 1 });

    let commentList = [];
    for (let index = 0; index < post.postTime; index++) {
      commentList.push(getRandomComment(true, post.postTime));
    }
    post.commentList = commentList;

    list.push({ user: postUser, post: post });
  }

  return list;
}
async function getRandomPostWall(page, isReverse) {
  let postWallList = [];
  for (var i = 0; i < page; i++) {
    let imagePost = await getRandomPostList(false, 1);
    let videoPost = await getRandomPostList(true, 1);
    let imagePost2 = await getRandomPostList(false, 1);
    let restImagePost = await getRandomPostList(false, 6);
    if (isReverse) {
      postWallList.push(...imagePost);
      postWallList.push(...videoPost);
    } else {
      postWallList.push(...videoPost);
      postWallList.push(...imagePost);
    }

    postWallList.push(...imagePost2);

    postWallList.push(...restImagePost);
  }

  return postWallList;
}
async function getRandomProfilePost(page) {
  let postWallList = [];
  for (var i = 0; i < page; i++) {
    let restImagePost = await getRandomPostList(false, 6);

    postWallList.push(...restImagePost);
  }

  return postWallList;
}

export {
  getRandomPostList,
  getRandomUserList,
  getRandomUser,
  getRandomdGif,
  randomEmoji,
  getRandomUsername,
  getRandomHashTag,
  getRandomPostWall,
  getRandomProfilePost,
};
