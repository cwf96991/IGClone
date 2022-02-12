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
function getRandomUser() {
  const name = faker.name.findName();
  const isNew = faker.datatype.boolean();
  const follower = getRandomUsername();
  const extraFollower = faker.datatype.number(100);
  return {
    avatar: faker.image.avatar(),
    isNFT: faker.datatype.boolean(),
    username: getRandomUsername(name),
    nickName: name,
    isNew,
    follower,
    extraFollower,
  };
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
async function getRandomPostList() {
  // isSameUser = isSameUser ?? false;
  // postCount = postCount ?? 20;
  let list = [];
  for (let index = 0; index < 5; index++) {
    const user = faker.helpers.createCard();
    let post = {};
    user.avatar = faker.image.avatar();
    user.isNFT = faker.datatype.boolean();
    user.isHighlight = faker.datatype.boolean();
    let fdIsNFT = faker.datatype.boolean();
    let fdAvatar = faker.image.avatar();
    let fdUsername = getRandomUsername();
    user.fd = {
      isNFT: fdIsNFT,
      avatar: fdAvatar,
      username: fdUsername,
      isMultiple: faker.datatype.boolean(),
      avatar2: faker.image.avatar(),
      avatar3: faker.image.avatar(),
    };
    user.isFollowing = faker.datatype.boolean();

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
    post.postTime = faker.datatype.number(23, { min: 1 });
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