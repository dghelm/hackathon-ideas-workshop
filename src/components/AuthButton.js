import { useEffect } from 'react';
import {
  Avatar,
  Button,
  ButtonGroup,
  Fade,
  HStack,
  IconButton,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { FaUserCog } from 'react-icons/fa';
import { openAuthWindow } from 'libkernel';
// import { IdentityDAC } from 'skynet-dacs-library';

const AuthButton = ({ userAuthStatus, bootloaderLoaded, isKernelLoaded }) => {
  //   useEffect(() => {
  //     const getUserID = async () => {
  //       let identityDAC = new IdentityDAC();
  //       let userID = await identityDAC.userID();
  //       console.log('userID: ', userID);
  //     };

  //     if (userAuthStatus) {
  //       getUserID();
  //     }
  //   }, [userAuthStatus]);

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
                  icon={<FiSearch fontSize="1.25rem" />}
                  aria-label="Search"
                />
                <IconButton
                  icon={<FiSettings fontSize="1.25rem" />}
                  aria-label="Settings"
                /> */}
            <a
              href="https://rivernet.hns.siasky.net/#/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                icon={<FaUserCog fontSize="1.25rem" />}
                aria-label="Profile Settings"
              />
            </a>
          </ButtonGroup>

          <Avatar
            boxSize="10"
            name="Christoph Winston"
            src="https://tinyurl.com/yhkm2ek8"
          />
        </>
      )}
    </HStack>
  );
};

export default AuthButton;
