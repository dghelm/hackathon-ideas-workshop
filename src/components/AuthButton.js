import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fade,
  HStack,
  Icon,
  IconButton,
  Skeleton,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FaUserCog, FaUserCircle } from 'react-icons/fa';
import { openAuthWindow } from 'libkernel';
import { useProfile } from '../hooks/useDACs';

const AuthButton = ({ userAuthStatus, bootloaderLoaded, isKernelLoaded }) => {
  const { userProfile, avatar } = useProfile(userAuthStatus, isKernelLoaded);

  return (
    <HStack spacing="4">
      {!userAuthStatus && (
        <Skeleton isLoaded={bootloaderLoaded}>
          <Button onClick={openAuthWindow}>Login to Kernel</Button>
        </Skeleton>
      )}
      {userAuthStatus && (
        <>
          <Fade in={!isKernelLoaded}>
            <Text as="samp" fontSize="sm">
              Kernel Loading...
            </Text>
          </Fade>
          <ButtonGroup variant="ghost" spacing="1">
            {/* <IconButton
                  icon={<FiSettings fontSize="1.25rem" />}
                  aria-label="Settings"
                /> */}
            <a
              href={
                userProfile?.userId
                  ? `https://rivernet.hns.siasky.net/#/user/${userProfile?.userId}`
                  : 'https://rivernet.hns.siasky.net/'
              }
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<FaUserCog fontSize="1.25rem" />}
                aria-label="Profile Settings"
              />
            </a>
          </ButtonGroup>

          <Box>
            {!userProfile?.userId && (
              <Spinner size="md" speed="0.25s" color="green.200" />
            )}
            {userProfile?.userId && !avatar && (
              <Icon as={FaUserCircle} w={8} h={8} color="gray.300" />
            )}
            {userProfile?.userId && avatar && (
              <Avatar
                boxSize="10"
                name={userProfile?.username || userProfile?.userId || ''}
                src={avatar}
              />
            )}
          </Box>
        </>
      )}
    </HStack>
  );
};

export default AuthButton;
