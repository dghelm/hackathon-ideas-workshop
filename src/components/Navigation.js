import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AuthButton from './AuthButton';
// import { Logo } from '../Logo';

const Navigation = (props) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  let navigate = useNavigate();

  return (
    <Box
      as="nav"
      bg="bg-surface"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Container
        py={{
          base: '3',
          lg: '4',
        }}
      >
        <Flex justify="space-between">
          <HStack spacing="4">
            {/* <Logo /> */}
            <Heading as="h1" size="xs">
              Hackthon Ideas
            </Heading>
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <Button onClick={() => navigate('/')}>Idea Feed</Button>
                <Button onClick={() => navigate('/new-idea')}>New Idea</Button>
                {/* <Button aria-current="page">Dashboard</Button>
                <Button>Tasks</Button>
                <Button>Bookmarks</Button>
                <Button>Users</Button> */}
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <AuthButton {...props} />
          ) : (
            <IconButton
              variant="ghost-on-accent"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
