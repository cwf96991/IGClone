import { faker } from "@faker-js/faker";

function postCommentFunc(
  input,
  targetIndex,
  finalCommentList,
  setFinalCommentList,
  showCommentList,
  setShowCommentList,
  finalCommentCount,
  setFinalCommentCount,
  currentUser
) {
  let comment = {};
  comment.text = input;
  comment.isLike = false;
  comment.isReply = false;
  comment.replyList = [];
  comment.user = currentUser;
  comment.postTime = 0;
  comment.likeCount = 0;
  comment.isOwner = true;
  comment.commentId = faker.datatype.uuid();
  if (input.includes("@") && targetIndex != null) {
    let index = targetIndex;
    let replyList = finalCommentList[index].replyList;
    comment.parentId = finalCommentList[index].commentId;
    replyList.push(comment);
    let newCommentList = finalCommentList;
    newCommentList[index].replyList = replyList;
    setFinalCommentList(newCommentList);
  } else {
    setFinalCommentList([...finalCommentList, comment]);
  }

  setShowCommentList([...showCommentList, comment]);
  setFinalCommentCount(finalCommentCount + 1);
}

function replyCommentFunc(
  index,
  targetIndex,
  finalCommentList,
  commentInput,
  setCommentInput
) {
  targetIndex.current = index;
  let user = finalCommentList[index].user;

  setCommentInput(commentInput + ` @${user.username}`);
}
function deleteCommentFunc(
  index,
  finalCommentList,
  setFinalCommentList,
  showCommentList,
  setShowCommentList,
  forceUpdate
) {
    

  try {
    let comment = finalCommentList[index];

    let newCommentList = finalCommentList;
    newCommentList.splice(index, 1);

    setFinalCommentList(newCommentList);

    let newShowCommentList = showCommentList;
    const target = newShowCommentList.indexOf(comment);
    if (target > -1) {
      newShowCommentList.splice(target, 1); // 2nd parameter means remove one item only
    }

    for (let index = 0; index < newShowCommentList.length; index++) {
      const element = newShowCommentList[index];
      if (element.parentId == comment.commentId) {
        target = newShowCommentList.indexOf(element);
        if (target > -1) {
          newShowCommentList.splice(target, 1); // 2nd parameter means remove one item only
        }
      }
    }
    setShowCommentList(newShowCommentList);

    forceUpdate();
  } catch (e) {
    console.log(e);
  }
}

export { postCommentFunc, replyCommentFunc,deleteCommentFunc };
