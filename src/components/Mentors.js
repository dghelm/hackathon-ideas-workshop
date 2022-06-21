import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Text,
  HStack,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';

const Mentors = () => {
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
              Hackathon Mentors
            </Text>
            <Text color="muted" fontSize="sm">
              Follow our mentors for additional help.
            </Text>
          </Box>
        </Stack>

        <HStack spacing="4">
          <AvatarGroup size="lg" borderColor="on-accent">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Button variant="primary" alignSelf="middle">
            Follow All
          </Button>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Mentors;
