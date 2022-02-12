import { emojis, gifs } from "./constant";
import { faker } from "@faker-js/faker";
import axios from "axios";
function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}
function getRandomUsername() {
  const name = faker.name.findName();
  const username = faker.internet.userName(name);
  return username;
}
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
    categories: "square",
  };

  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.apiKey +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating +
      "&categories=" +
      giphy.categories
  );

  const response = await axios.get(giphyURL);
  let result = response.data.data.images.original.url;

  return result;
}
function getRandomUserList() {
  let list = [];
  for (let index = 0; index < 20; index++) {
    list.push({
      avatar: faker.image.avatar(),
      isNFT: faker.datatype.boolean(),
    });
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
        let url = randomGifs();
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
  getRandomdGif,
  randomEmoji,
  getRandomUsername,
  getRandomHashTag,
};
