import { Stack, HStack, Avatar, Box, Text, Tag } from '@chakra-ui/react';
import ReactTimeAgo from 'react-time-ago'
import {
  eventOptions,
  prizeTrackOptions,
  techStackOptions,
} from '../data/appData';

const SingleIdea = ({ title, userId, ts, text, ext, userProfile }) => {
  return (
    <Stack fontSize="sm" px="4" spacing="4">
      <Stack direction="row" justify="space-between" spacing="4">
        <HStack spacing="3">
          <Avatar src={userProfile?.avatar} boxSize="16" />
          <Box>
            <Text fontSize="md" fontWeight="bold" color="emphasized">
              {title}
            </Text>
            <Text pb="1">{userProfile?.username ? `@${userProfile.username}` : userId}</Text>
            {ext?.event && (
            <Tag size="sm" variant="outline">
              {eventOptions[ext.event]}
            </Tag>
            )}
            {ext?.prizeTrack && (
            <Tag size="sm">{prizeTrackOptions[ext.prizeTrack]}</Tag>
            )}
            {ext?.seekingTeam && (
              <Tag size="sm" ml="2" colorScheme="green">
                Seeking Team
              </Tag>
            )}
          </Box>
        </HStack>
        <Text color="muted"><ReactTimeAgo date={ts} locale="en-US" timeStyle="twitter" />
          
          </Text>
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
        {ext?.techStack.map((item) => {
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
