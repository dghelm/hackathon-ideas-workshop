import { Box, Divider, Stack } from '@chakra-ui/react';
import Mentors from './Mentors';
import IdeaFeed from './IdeaFeed';

const FeedPage = ({ isKernelLoaded, userAuthStatus }) => {
  return (
    <Box
      as="section"
      bg="bg-surface"
      pt={{ base: '4', md: '8' }}
      pb={{ base: '12', md: '24' }}
    >
      <Stack spacing={16}>
        <Mentors {...{ isKernelLoaded, userAuthStatus }} />
        <Divider />
        <IdeaFeed />
      </Stack>
    </Box>
  );
};

export default FeedPage;
