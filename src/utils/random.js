import { emojis, gifs } from "./constant";
import { faker } from "@faker-js/faker";
import axios from "axios";
function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
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
function getRandomUser() {
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
  user.username = getRandomUsername(user.name);
  user.isNew = isNew;
  user.follower = follower;
  user.isWebsite = faker.datatype.boolean();
  user.isClosedFD = faker.datatype.boolean();
  user.extraFollower = extraFollower;
  user.isFollowing = faker.datatype.boolean();
  user.isVerify = faker.datatype.boolean();
  user.postCount = faker.datatype.number();
  user.userId = faker.datatype.uuid();
  user.followerCount = faker.datatype.number();
  user.followingCount = faker.datatype.number();

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
async function getRandomPostList() {
  // isSameUser = isSameUser ?? false;
  // postCount = postCount ?? 20;
  let list = [];
  for (let index = 0; index < 5; index++) {
    const user = getRandomUser();

    let post = {};
    post.isfav = faker.datatype.boolean();
    let tempImgList = [];
    for (let index = 0; index < faker.mersenne.rand(1, 10); index++) {
      if (faker.datatype.boolean()) {
        tempImgList.push(faker.image.image());
      } else {
        // let url = randomGifs();
        let url = await getRandomdGif();
        tempImgList.push(url);
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
    
    list.push({ user: user, post: post });
  }
  
  return list;
}
export {
  getRandomPostList,
  getRandomUserList,
  getRandomUser,
  getRandomdGif,
  randomEmoji,
  getRandomUsername,
  getRandomHashTag,
};
