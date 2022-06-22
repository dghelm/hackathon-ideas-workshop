import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Switch,
  Tag,
  TagLabel,
  TagCloseButton,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDACs from '../hooks/useDACs';
import _ from 'lodash';

export const eventOptions = { 'eth-newyork': 'ETHNewYork' };
export const prizeTrackOptions = {
  skynet: 'Skynet Labs',
  'public-goods': 'Public Goods',
};
export const techStackOptions = {
  skynet: 'Skynet',
  solidity: 'Solidity',
  react: 'React',
  flutter: 'Flutter',
  vue: 'Vue',
  hardhat: 'Hardhat',
  ethersjs: 'Ethers.js',
  ts: 'Typescript',
};

const NewIdeaCard = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [event, setEvent] = useState('');
  const [prizeTrack, setPrizeTrack] = useState('');
  const [techStack, setTechStack] = useState([]);
  const [seekingTeam, setSeekingTeam] = useState('');

  const [creatingPost, setCreatingPost] = useState(false);

  const navigate = useNavigate();
  const { createPost, userProfile } = useDACs();

  const postNewIdea = async () => {
    setCreatingPost(true);
    await createPost({
      title,
      text,
      event,
      prizeTrack,
      techStack,
      seekingTeam: seekingTeam ? 'true' : 'false',
    });
    setCreatingPost(false);
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <Box
      as="form"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      borderRadius="lg"
      {...props}
    >
      <Stack
        spacing="5"
        px={{ base: '4', md: '6' }}
        py={{ base: '5', md: '6' }}
      >
        <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
          <FormControl id="userID">
            <FormLabel>MySky UserID</FormLabel>
            <Input
              value={userProfile?.userId || ''}
              placeholder="Log In to Submit a New Idea"
              disabled={true}
            />
          </FormControl>
        </Stack>
        <FormControl id="idea-title">
          <FormLabel>Idea Title</FormLabel>
          <Input
            isDisabled={creatingPost}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name of Project"
          />
        </FormControl>
        <FormControl id="idea-description">
          <FormLabel>Description</FormLabel>
          <Textarea
            isDisabled={creatingPost}
            placeholder="Describe what you'll be building"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </FormControl>
        <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
          <FormControl id="event">
            <FormLabel>Event</FormLabel>
            <Select
              isDisabled={creatingPost}
              placeholder="Select option"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            >
              {Object.entries(eventOptions).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl id="track">
            <FormLabel>Prize Track</FormLabel>
            <Select
              isDisabled={creatingPost}
              placeholder="Select option"
              value={prizeTrack}
              onChange={(e) => setPrizeTrack(e.target.value)}
            >
              {Object.entries(prizeTrackOptions).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl id="tech-stack">
            <FormLabel>Tech Stack</FormLabel>
            <Select
              isDisabled={creatingPost}
              placeholder="Select option"
              value=""
              onChange={(e) =>
                setTechStack(_.uniq([...techStack, e.target.value]))
              }
            >
              {Object.entries(techStackOptions).map(([key, value]) => {
                return (
                  <option key={key} value={key}>
                    {value}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Looking for Team?</FormLabel>
            <Switch
              isDisabled={creatingPost}
              size="lg"
              id="team-seeking"
              value={seekingTeam}
              onChange={(e) => setSeekingTeam(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Stack>
      <Divider />
      <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
        <Button onClick={postNewIdea} variant="primary" disabled={creatingPost}>
          {creatingPost && 'Saving to Feed...'}
          {!creatingPost && 'Create Idea Entry'}
        </Button>
        <HStack px="4">
          {techStack.map((item) => {
            return (
              <Tag key={item} variant="solid" size="md">
                <TagLabel>{techStackOptions[item]}</TagLabel>
                <TagCloseButton
                  onClick={() => {
                    setTechStack(_.without(techStack, item));
                  }}
                />
              </Tag>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
};

export default NewIdeaCard;
