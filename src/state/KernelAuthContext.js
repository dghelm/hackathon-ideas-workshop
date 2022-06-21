import { createContext, useState, useEffect } from 'react';
import { init, loginComplete, logoutComplete, kernelLoaded } from 'libkernel';

const KernelAuthContext = createContext(undefined);

const KernelAuthProvider = ({ children }) => {
  const [kernelAuthState, setKernelAuthState] = useState({
    bootloaderLoaded: false,
    userAuthStatus: false,
    isKernelLoaded: false,
  });

  // on first load, check authentication status of user
  // this also calls init()
  useEffect(() => {
    // call async method
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    await init();
    setKernelAuthState({ ...kernelAuthState, bootloaderLoaded: true });

    loginComplete().then(() => {
      setKernelAuthState({ ...kernelAuthState, userAuthStatus: true });
    });

    kernelLoaded().then(() => {
      setKernelAuthState({ ...kernelAuthState, isKernelLoaded: true });
    });

    logoutComplete().then(() => {
      setKernelAuthState({ ...kernelAuthState, userAuthStatus: false });
    });
  };

  return (
    <KernelAuthContext.Provider value={kernelAuthState}>
      {children}
    </KernelAuthContext.Provider>
  );
};

export { KernelAuthContext, KernelAuthProvider };
