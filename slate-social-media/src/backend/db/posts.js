import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hello I am tanay  pratap",
    likes: {
      likeCount: 66,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/tanay.jpg",

    fullName: "Tanay  Pratap",
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
    content: "I am prankur a neogrammer.",

    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "iprankurpandey",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/prankur.png",
    fullName: "Prankur Pandey",
    comments: [
      {
        _id: uuid(),
        username: "adarshpatel",
        text: "lern React js .",
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
        text: "learn java  .",
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
    content: "Hello I am adarsh pratel",
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshpatel",
    avatar:
      "https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/adarshpateldev.jpeg",
    fullName: "Adarsh Patel",
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
];
