import Video from "../models/video.js";
import { v4 as uuid } from "uuid";

// create comment function
export const createComment = async (commentData) => {
  const comment = {
    commentID: uuid(),
    videoID: commentData.videoID,
    username: commentData.username,
    comment: commentData.comment,
    timestamp: new Date(),
  };

  // cek if videoID exist from video collection
  const cekVideo = await Video.findOne({ videoID: commentData.videoID });

  if (!cekVideo) {
    return { status: 400, message: "Video not found" };
  }
  try {
    // push comment to video collection
    cekVideo.comments.push(comment);
    return await cekVideo.save();
  } catch (err) {
    throw new Error(err);
  }
};

// get comment function by videoID
export const getCommentByVideoID = async (videoID) => {
  try {
    const comments = await Video.find({ videoID: videoID }, { comments: 1, _id: 0 });
    return comments;
  } catch (err) {
    throw new Error(err);
  }
};
