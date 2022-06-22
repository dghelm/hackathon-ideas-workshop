import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  HStack,
  Avatar,
  AvatarGroup,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SocialDAC } from 'skynet-dacs-library';
import { getUserAvatar } from '../hooks/useDACs';

const mentorUserIds = [
  'fd06ecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab', //dghelm demo
  '93d487d5211d826c09e7faf56ca5e092d67dc7e8b9017e1d336eaeaf16e65236', //redsolver
  'c6905fbde67575a8fbcb7c229a4f1169f2a35a29721802408fd227b103e789e6', //Delivator test
  '050da969ae6761f8b6a92ab4e9ef587d8f12deaf8c1c07487711bd989320e55d', //Skunk_Ink test
];

const Mentors = ({ userAuthStatus, isKernelLoaded }) => {
  const [mentorAvatars, setMentorAvatars] = useState([]);
  const [followingInProgress, setFollowingInProgress] = useState(false);

  useEffect(() => {
    const fetchMentorAvatars = async () => {
      const avatars = await Promise.all(
        mentorUserIds.map(async (userId) => {
          const avatar = await getUserAvatar(userId);
          return [userId, avatar];
        })
      );
      setMentorAvatars(avatars);
    };

    if (userAuthStatus && isKernelLoaded) {
      fetchMentorAvatars();
    }
  }, [userAuthStatus, isKernelLoaded]);

  const followMentors = async () => {
    const socialDAC = new SocialDAC();

    console.log('start following');
    setFollowingInProgress(true);

    for (const mentorId of mentorUserIds) {
      console.log('following: ', mentorId);
      await socialDAC.follow(mentorId);
    }
    setFollowingInProgress(false);
  };

  return (
    <Container>
      <Stack spacing="5">
        <Stack
          spacing="4"
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
        >
          <Box>
            <Text fontSize="xl" fontWeight="medium">
              Hackathon Mentors
            </Text>
            <Text color="muted" fontSize="sm">
              Follow our mentors for additional help.
            </Text>
          </Box>
        </Stack>

        <HStack spacing="4">
          {mentorAvatars.length && (
            <AvatarGroup size="lg" borderColor="on-accent">
              {mentorAvatars.map(([userId, avatarUrl]) => (
                <Avatar key={userId} name={userId} src={avatarUrl} />
              ))}
              {/* <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" /> */}
            </AvatarGroup>
          )}
          {!mentorAvatars.length && <Spinner size="lg" />}
          <Button
            variant="primary"
            alignSelf="middle"
            onClick={followMentors}
            disabled={followingInProgress}
          >
            {!followingInProgress && 'Follow All'}
            {followingInProgress && 'Following...'}
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Mentors;
