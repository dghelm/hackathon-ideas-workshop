import { useState, useEffect } from 'react';
import { FeedDAC, IdentityDAC, ProfileDAC } from 'skynet-dacs-library';
import { getSkylinkUrlForPortal } from 'skynet-js';

const useDACs = (userAuthStatus, isKernelLoaded) => {
  const [userProfile, setUserProfile] = useState();
  const [avatar, setAvatar] = useState();

  const createPost = async ({
    title,
    text,
    event,
    prizeTrack,
    techStack,
    seekingTeam,
  }) => {
    console.log('Called create');
    const feedDAC = new FeedDAC();
    const post = {
      title,
      text,
      ext: { event, prizeTrack, techStack, seekingTeam },
    };
    console.log(post);

    let result;
    try {
      result = await feedDAC.createPost(post);
      console.log('Result: ', result);
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    const getUserID = async () => {
      try {
        let identityDAC = new IdentityDAC();
        const userID = await identityDAC.userID();
        console.log(userID);

        let profileDAC = new ProfileDAC();
        const result = await profileDAC.getProfile(userID);
        console.log('got result from profile');
        console.log(result);
        setUserProfile(result);
        setAvatar(avatarFieldToUrl(result?.avatar));
      } catch (err) {
        console.error({ err });
      }
    };

    if (userAuthStatus && isKernelLoaded) {
      getUserID();
    }
  }, [userAuthStatus, isKernelLoaded]);

  return {
    userProfile,
    avatar,
    createPost,
    getUserAvatar,
  };
};

export const getUserAvatar = async (userID) => {
  let profileDAC = new ProfileDAC();
  const result = await profileDAC.getProfile(userID);
  return avatarFieldToUrl(result?.avatar);
};

const avatarFieldToUrl = (avatar) => {
  return getSkylinkUrlForPortal('https://siasky.net', avatar[0].url);
};

export default useDACs;
