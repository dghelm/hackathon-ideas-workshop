import { useState, useEffect } from 'react';
import { FeedDAC, IdentityDAC, ProfileDAC } from 'skynet-dacs-library';
import { getSkylinkUrlForPortal } from 'skynet-js';

const useDACs = (userAuthStatus, isKernelLoaded) => {
  // Mock data to be replaced by DAC data
  const userProfile = { userId: 'abcdef0123456789', username: 'mockUser' };
  const avatar =
    'https://images.unsplash.com/photo-1588820502373-625223afa4ce?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHx3aGl0ZSUyMCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:800&q:60';

  const createPost = (post) => {
    console.log('Call createPost:', post);
  };

  // const [userProfile, setUserProfile] = useState();
  // const [avatar, setAvatar] = useState();

  // const createPost = async ({
  //   title,
  //   text,
  //   event,
  //   prizeTrack,
  //   techStack,
  //   seekingTeam,
  // }) => {
  //   console.log('Called create');
  //   const feedDAC = new FeedDAC();
  //   const post = {
  //     title,
  //     text,
  //     ext: { event, prizeTrack, techStack, seekingTeam },
  //   };
  //   console.log(post);

  //   let result;
  //   try {
  //     result = await feedDAC.createPost(post);
  //     console.log('Result: ', result);
  //   } catch (error) {
  //     console.error({ error });
  //   }
  // };

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
    createPost, //method for creating a post tailored to our app using FeedDAC
  };
};

export const followUserList = async (userIds, extKey, extValue) => {
  // mock return
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

// helper method for getting user's profile avatarURL given userId
export const getUserAvatar = async (userID) => {
  // return mock data for now.
  return 'https://images.unsplash.com/photo-1612459284970-e8f027596582?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:668&q:80';

  // let profileDAC = new ProfileDAC();
  // const result = await profileDAC.getProfile(userID);
  // return avatarFieldToUrl(result?.avatar);
};

const avatarFieldToUrl = (avatar) => {
  return getSkylinkUrlForPortal('https://siasky.net', avatar[0].url);
};

export default useDACs;
