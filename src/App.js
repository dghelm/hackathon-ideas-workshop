import { Box, Container, Skeleton } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FeedPage from './components/FeedPage';
import NewIdeaPage from './components/NewIdeaPage';
import useKernelAuth from './hooks/useKernelAuth';
import Banner from './components/Banner';

function App() {
  const { userAuthStatus, bootloaderLoaded, isKernelLoaded } = useKernelAuth();

  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Navigation {...{ userAuthStatus, bootloaderLoaded, isKernelLoaded }} />
      {!userAuthStatus && (
        <Container pt={{ base: '8', lg: '8' }} pb={{ base: '0', lg: '0' }}>
          <Skeleton isLoaded={bootloaderLoaded}>
            <Banner
              primary="Login Required to Use Site —"
              secondary="Please authenticate with the Kernel"
            />
          </Skeleton>
        </Container>
      )}
      <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
        {bootloaderLoaded && (
          <Routes>
            <Route
              path="/"
              element={
                <FeedPage
                  userAuthStatus={userAuthStatus}
                  isKernelLoaded={isKernelLoaded}
                />
              }
            />
            <Route
              path="/new-idea"
              element={<NewIdeaPage userAuthStatus={userAuthStatus} />}
            />
          </Routes>
        )}
      </Container>
    </Box>
  );
}

export default App;
