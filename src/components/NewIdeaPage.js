import { Box, Container, Stack, StackDivider, Text } from '@chakra-ui/react';
import NewIdeaCard from './NewIdeaCard';

const NewIdeaPage = () => {
  return (
    <Stack spacing="5" divider={<StackDivider />}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '5', lg: '8' }}
        justify="space-between"
      >
        <Box flexShrink={0}>
          <Text fontSize="lg" fontWeight="medium">
            Submit a New Hackthon Idea
          </Text>
          <Text color="muted" fontSize="sm">
            Include lots of details and info about your stack.
          </Text>
        </Box>
        <NewIdeaCard maxW={{ lg: '3xl' }} />
      </Stack>
    </Stack>
  );
};

export default NewIdeaPage;
