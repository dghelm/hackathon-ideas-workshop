import { useState, useEffect, useReducer } from 'react';
import { FeedDAC, IdentityDAC, ProfileDAC } from 'skynet-dacs-library';
import { getSkylinkUrlForPortal } from 'skynet-js';
import {
  mockHackerAvatar,
  mockIdeas,
  mockProfileAvatar,
  mockUserProfile,
} from '../data/mockData';

// Used in AuthButton.js
export const useProfile = (userAuthStatus, isKernelLoaded) => {
  // Mock data to be replaced by DAC data
  const userProfile = mockUserProfile;
  const avatar = mockProfileAvatar;

  // const [userProfile, setUserProfile] = useState();
  // const [avatar, setAvatar] = useState();

  // // Once logged in and kernelLoaded:
  // // Get userId and use it to fetch user's profile
  // // Using the profile, get a URL for accessing the profile image.

  // useEffect(() => {
  //   const getUserID = async () => {
  //     try {
  //       let identityDAC = new IdentityDAC();
  //       const userID = await identityDAC.userID();
  //       console.log(userID);

  //       let profileDAC = new ProfileDAC();
  //       const result = await profileDAC.getProfile(userID);
  //       console.log('got result from profile');
  //       console.log(result);
  //       setUserProfile(result);
  //       setAvatar(avatarFieldToUrl(result?.avatar));
  //     } catch (err) {
  //       console.error({ err });
  //     }
  //   };

  //   if (userAuthStatus && isKernelLoaded) {
  //     getUserID();
  //   }
  // }, [userAuthStatus, isKernelLoaded]);

  return {
    userProfile, //current userProfile from ProfileDAC
    avatar, //current user's avatar URL
  };
};

// helper method for getting user's profile avatarURL given userId
// used in Hacker.js, where it maintains list and state
export const getUserAvatar = async (userID) => {
  // return mock data for now.
  // return mockHackerAvatar;

  let profileDAC = new ProfileDAC();
  const result = await profileDAC.getProfile(userID);
  return avatarFieldToUrl(result?.avatar);
};

// Used in Hackers.js
export const followUserList = async (userIds, extKey, extValue) => {
  // mock void return
  return;

  // const socialDAC = new SocialDAC();

  // for (const userId of userIds) {
  //   console.log('following: ', userId);
  //   if (extKey && extValue) {
  //     await socialDAC.follow(userId, { extKey: extValue });
  //   } else {
  //     await socialDAC.follow(userId);
  //   }
  // }
};

// Used in IdeaFeed.js
// Notice we handle state and list iteration here, unlike
// the standalone function of getUserAvatar and it use in Hackers.js
export const useIdeasFeed = (userAuthStatus, isKernelLoaded) => {
  // Mock data to be replaced by DAC data
  // const ideasList = mockIdeas;
  // const loadingProgress = 100;

  // const [ideasList, setIdeasList] = useState([]);
  const [userIdeaLists, setUserIdeaLists] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const [ideasList, dispatchIdeasList] = useReducer((state, action) => {
    const mergePostLists = [...state, ...action];
    console.log(mergePostLists);
    return mergePostLists;
  }, []);

  // Once logged in and kernelLoaded:
  // Use hackerUserIds + logged in userId to generate list of all feed posts
  // ordered by date. Might need to adjust this.

  useEffect(() => {
    const getIdeasList = async () => {
      try {
        // let identityDAC = new IdentityDAC();
        // const userId = await identityDAC.userID();

        // const userList = [...hackerUserIds, userId];
        const userList = hackerUserIds;

        let feedDAC = new FeedDAC();

        for (const userId of userList) {
          console.log('loading posts for user: ', userId);
          const posts = await feedDAC.loadPostsForUser(userId);
          console.log(posts);

          dispatchIdeasList({ posts });
        }
      } catch (err) {
        console.error({ err });
      }
    };

    if (userAuthStatus && isKernelLoaded) {
      getIdeasList();
    }
  }, [userAuthStatus, isKernelLoaded]);

  return {
    ideasList, //latest state of array of ideas
    loadingProgress, //percentage of users loaded
  };
};

//method for creating a post tailored to our app using FeedDAC
// take form data and call FeedDAC's createPost
// Used in NewIdeaCard.js
export const createPost = async ({
  title,
  text,
  event,
  prizeTrack,
  techStack,
  seekingTeam,
}) => {
  //mock return
  return;

  // const feedDAC = new FeedDAC();

  // const post = {
  //   title,
  //   text,
  //   ext: { event, prizeTrack, techStack, seekingTeam },
  // };

  // console.log(post);

  // let result;
  // try {
  //   result = await feedDAC.createPost(post);
  //   console.log('Result: ', result);
  // } catch (error) {
  //   console.error({ error });
  // }
};

const SKYNET_PORTAL = 'https://siasky.net';

// current Skynet Kernel doesn't handle downloading dataurls or creating preferred portal URLs
// so here we use skynet-js to quickly construct URLs.
const avatarFieldToUrl = (avatar) => {
  return getSkylinkUrlForPortal(SKYNET_PORTAL, avatar[0].url);
};

// Here we'll bootstrap by hard-coding userIDS (most users might not have a social graph yet.)
// We could create a MySky identity just for creating friendlists which can be loaded in dynamically.
// These could use the `ext` field to designate a list name, event, etc.

// Used for useIdeaFeed and in Hackers.js
export const hackerUserIds = [
  '93d487d5211d826c09e7faf56ca5e092d67dc7e8b9017e1d336eaeaf16e65236', //redsolver
  // 'fd06ecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab', //dghelm demo
  // 'c6905fbde67575a8fbcb7c229a4f1169f2a35a29721802408fd227b103e789e6', //Delivator test
  // '050da969ae6761f8b6a92ab4e9ef587d8f12deaf8c1c07487711bd989320e55d', //Skunk_Ink test
];
