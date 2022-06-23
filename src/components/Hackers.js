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
import { useEffect, useReducer, useState } from 'react';
import { followUserList, getUserAvatar, hackerUserIds } from '../hooks/useDACs';
import _ from 'lodash';

const Hackers = ({ userAuthStatus, isKernelLoaded }) => {
  const [hackerAvatars, dispatchHackerAvatars] = useReducer((state, action) => {
    return _.uniqBy([...state, action], 'hackerUserId');
  }, []);
  const [followingInProgress, setFollowingInProgress] = useState(false);

  useEffect(() => {
    const fetchHackerAvatars = async () => {
      for (const hackerUserId of hackerUserIds) {
        // console.log('getting avatar: ', hackerUserId);
        // const avatar = await getUserAvatar(hackerUserId);
        const avatar = '';
        dispatchHackerAvatars({ hackerUserId, avatar });
      }
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
              {hackerAvatars.map(
                ({ hackerUserId: userId, avatar: avatarUrl }) => (
                  <Avatar key={userId} name={userId} src={avatarUrl} />
                )
              )}
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
