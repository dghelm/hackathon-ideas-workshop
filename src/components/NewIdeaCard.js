import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Switch,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FeedDAC } from 'skynet-dacs-library';

const NewIdeaCard = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [event, setEvent] = useState('');
  const [prizeTrack, setPrizeTrack] = useState('');
  const [techStack, setTechStack] = useState('');
  const [seekingTeam, setSeekingTeam] = useState('');

  const [creatingPost, setCreatingPost] = useState(false);

  const navigate = useNavigate();

  const createPost = async () => {
    setCreatingPost(true);
    //     const feedDAC = new FeedDAC();
    //     const post = { title: formData.title, text: formData.text };
    //     const okay = await feedDAC.createPost(post);
    //     console.log('okay: ', okay);
    setTimeout(() => navigate('/'), 5000);
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
              defaultValue="Log In to Submit a New Idea"
              value="Current MySky UserId"
              disabled="true"
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
            placeholder="Name of Project"
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
              <option value="eth-newyork">ETHNewYork</option>
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
              <option value="skynet">Skynet</option>
              <option value="public-goods">Public Goods</option>
            </Select>
          </FormControl>
          <FormControl id="tech-stack">
            <FormLabel>Tech Stack</FormLabel>
            <Select
              isDisabled={creatingPost}
              placeholder="Select option"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
            >
              <option value="skynet">Skynet</option>
              <option value="solidity">Solidity</option>
              <option value="react">React</option>
              <option value="flutter">Flutter</option>
              <option value="vue">Vue</option>
              <option value="hardhat">Hardhat</option>
              <option value="ethers-js">Ethers.js</option>
              <option value="ts">Typescript</option>
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
        <Button onClick={createPost} variant="primary" disabled={creatingPost}>
          {creatingPost && 'Saving to Feed...'}
          {!creatingPost && 'Create Idea Entry'}
        </Button>
      </Flex>
    </Box>
  );
};

export default NewIdeaCard;
