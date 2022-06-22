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
import { followUserList, getUserAvatar } from '../hooks/useDACs';

// here we'll bootstrap by hard-coding, but we could create a MySky identity just for creating
// friendlists, using the `ext` field to designate list name, event, etc.
const hackerUserIds = [
  'fd06ecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab', //dghelm demo
  '93d487d5211d826c09e7faf56ca5e092d67dc7e8b9017e1d336eaeaf16e65236', //redsolver
  'c6905fbde67575a8fbcb7c229a4f1169f2a35a29721802408fd227b103e789e6', //Delivator test
  '050da969ae6761f8b6a92ab4e9ef587d8f12deaf8c1c07487711bd989320e55d', //Skunk_Ink test
];

const Hackers = ({ userAuthStatus, isKernelLoaded }) => {
  const [hackerAvatars, setHackerAvatars] = useState([]);
  const [followingInProgress, setFollowingInProgress] = useState(false);

  useEffect(() => {
    const fetchHackerAvatars = async () => {
      const avatars = await Promise.all(
        hackerUserIds.map(async (userId) => {
          const avatar = await getUserAvatar(userId);
          return [userId, avatar];
        })
      );
      setHackerAvatars(avatars);
    };

    if (userAuthStatus && isKernelLoaded) {
      fetchHackerAvatars();
    }
  }, [userAuthStatus, isKernelLoaded]);

  const followHackers = async () => {
    console.log('start following');
    setFollowingInProgress(true);

    await followUserList(hackerUserIds, 'hackathonEvent', 'ethNewYork');

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
              Hackathon Participants &amp; Mentors
            </Text>
            <Text color="muted" fontSize="sm">
              Follow other hackers to see their ideas.
            </Text>
          </Box>
        </Stack>

        <HStack spacing="4">
          {hackerAvatars.length && (
            <AvatarGroup size="lg" borderColor="on-accent">
              {hackerAvatars.map(([userId, avatarUrl]) => (
                <Avatar key={userId} name={userId} src={avatarUrl} />
              ))}
            </AvatarGroup>
          )}
          {!hackerAvatars.length && <Spinner size="lg" />}
          <Button
            variant="primary"
            alignSelf="middle"
            onClick={followHackers}
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

export default Hackers;
