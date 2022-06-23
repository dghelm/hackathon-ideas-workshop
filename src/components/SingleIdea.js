import { Stack, HStack, Avatar, Box, Text, Tag } from '@chakra-ui/react';
import {
  eventOptions,
  prizeTrackOptions,
  techStackOptions,
} from '../data/appData';

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

export default SingleIdea;
