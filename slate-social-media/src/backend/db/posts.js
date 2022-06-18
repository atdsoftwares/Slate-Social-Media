import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hello I am naman saxena",
    likes: {
      likeCount: 66,
      likedBy: [],
      dislikedBy: [],
    },
    username: "namansaxena",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/naman.jpeg",
    fullName: "Naman Saxena",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "adarshpatel",
        text: "I am adarsh patel front end developer in making.",
        avatar:
          "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/adarshpateldev.jpeg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "namansaxena",
        text: "I am naman and I Wow!",
        avatar:
          "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/naman.jpeg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Jo hoga dekha jayega",

    likes: {
      likeCount: 85,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/tanay.jpg",
    fullName: "Tanay Pratap",

    comments: [
      {
        _id: uuid(),
        username: "adarshpatel",
        text: "Nothing is interesting.",
        avatar:
          "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/adarshpateldev.jpeg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "namansaxena",
        text: "Nothing is impossible .",
        avatar:
          "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/naman.jpeg",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
