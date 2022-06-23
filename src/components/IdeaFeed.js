import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  StackDivider,
  Center,
  Progress,
  Fade,
} from '@chakra-ui/react';

import SingleIdea from './SingleIdea';
import { useIdeasFeed } from '../hooks/useDACs';

import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const IdeaFeed = ({ isKernelLoaded, userAuthStatus }) => {
  let navigate = useNavigate();
  const ideasList = [];
  const loadingProgress = 100;
  // const { ideasList, loadingProgress } = useIdeasFeed(
  //   userAuthStatus,
  //   isKernelLoaded
  // );

  return (
    <Container>
      <Stack spacing="5">
        <Stack
          spacing="4"
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
        >
          <Box>
            <Text fontSize="2xl" fontWeight="medium">
              Lastest Hackathon Ideas
            </Text>
            <Text color="muted" fontSize="md">
              Check the latest submissions, vote or comment.
            </Text>
          </Box>
          <Button
            variant="primary"
            alignSelf="start"
            leftIcon={<FaPlus />}
            onClick={() => navigate('/new-idea')}
          >
            New Idea
          </Button>
        </Stack>
        <Container>
          <Center
            maxW="2xl"
            mx="auto"
            py={{
              base: '4',
              md: '8',
            }}
          >
            <Box bg="bg-surface" py="4">
              <Stack divider={<StackDivider />} spacing="4">
                {ideasList.map((idea) => (
                  <SingleIdea key={idea.id} {...idea} />
                ))}
                <Fade in={loadingProgress < 100}>
                  <Progress
                    colorScheme="green"
                    size="sm"
                    value={loadingProgress}
                  />
                </Fade>
              </Stack>
            </Box>
          </Center>
        </Container>
      </Stack>
    </Container>
  );
};

export default IdeaFeed;
