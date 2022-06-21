import { Box, Stack, Text } from '@chakra-ui/react';

const Banner = ({ primary, secondary }) => {
  return (
    <Box
      bg="bg-accent"
      color="on-accent"
      p={{ base: '4', md: '3' }}
      py={{ base: '3', md: '5' }}
      position="relative"
      borderRadius="xl"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        spacing={{ base: '0.5', md: '1.5' }}
        pe={{ base: '4', sm: '0' }}
      >
        <Text fontWeight="medium">{primary}</Text>
        <Text color="on-accent-muted">{secondary}</Text>
      </Stack>
    </Box>
  );
};

export default Banner;
