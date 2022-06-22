import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  HStack,
  Avatar,
  AvatarBadge,
  StackDivider,
  Center,
  Tag,
} from '@chakra-ui/react';

import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  eventOptions,
  prizeTrackOptions,
  techStackOptions,
} from './NewIdeaCard';

export const sampleIdeas = [
  {
    id: 12345,
    userId: 'fd06ecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab',
    userName: 'dghelm',
    avatarUrl:
      'https://siasky.net/MABJtvAWAy6owdjwoEhWJDMy1C6uOkqYee4WgCiE6IYMpA',
    title: 'Fungible NFTs',
    text: 'I want to make a really cool platform to revolutionizing NFTs by introducing that which they lack: fungibility. I have a rough outline of the solidity code, but would love help with creating a user interface.',
    ext: {
      event: 'eth-newyork',
      prizeTrack: 'public-goods',
      techStack: ['skynet', 'react', 'ethersjs'],
      seekingTeam: true,
    },
    ts: 0, // maybe we'll use postedAt instead
  },
  {
    id: 123456,
    userId: 'faceecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab',
    userName: '',
    avatarUrl: '',
    title: 'Decentralized API repository',
    text: 'I want to make a permissionless way for developers to add their Kernel modules to a public repository, similar to npm.',
    ext: {
      event: 'eth-newyork',
      prizeTrack: 'skynet',
      techStack: ['skynet', 'flutter'],
      seekingTeam: false,
    },
    ts: 0, // maybe we'll use postedAt instead
  },
];

const SingleIdea = ({ avatarUrl, title, userName, userId, ts, text, ext }) => {
  return (
    <Stack fontSize="sm" px="4" spacing="4">
      <Stack direction="row" justify="space-between" spacing="4">
        <HStack spacing="3">
          <Avatar src={avatarUrl} boxSize="16" />
          <Box>
            <Text fontSize="md" fontWeight="bold" color="emphasized">
              {title}
            </Text>
            <Text pb="1">{userName ? `@${userName}` : userId}</Text>
            <Tag size="sm" variant="outline">
              {eventOptions[ext.event]}
            </Tag>
            <Tag size="sm">{prizeTrackOptions[ext.prizeTrack]}</Tag>
            {ext.seekingTeam && (
              <Tag size="sm" ml="2" colorScheme="green">
                Seeking Team
              </Tag>
            )}
          </Box>
        </HStack>
        <Text color="muted">{ts}</Text>
      </Stack>
      <Text
        color="muted"
        sx={{
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
          overflow: 'hidden',
          display: '-webkit-box',
        }}
      >
        {text}
      </Text>
      <HStack>
        {ext.techStack.map((item) => {
          return (
            <Tag key={item} variant="solid" size="md">
              {techStackOptions[item]}
            </Tag>
          );
        })}
      </HStack>
    </Stack>
  );
};

const IdeaFeed = () => {
  let navigate = useNavigate();
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
                {sampleIdeas.map((idea) => (
                  <SingleIdea key={idea.id} {...idea} />
                ))}
              </Stack>
            </Box>
          </Center>
        </Container>
      </Stack>
    </Container>
  );
};

export default IdeaFeed;
