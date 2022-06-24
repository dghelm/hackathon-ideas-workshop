import { useState, useEffect } from 'react';
import {
  init,
  kernelLoaded,
  loginComplete,
  logoutComplete,
  openAuthWindow,
} from 'libkernel';

const useKernelAuth = () => {
  const [userAuthStatus, setUserAuthStatus] = useState(false);
  const [bootloaderLoaded, setBootloaderLoaded] = useState(false);
  const [isKernelLoaded, setIsKernelLoaded] = useState(false);

  // on first load, check authentication status of user
  // this also calls init()
  useEffect(() => {
    // call async method
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    // // mock load success for testing UI starting points

    // setBootloaderLoaded(true);
    // setUserAuthStatus(true);
    // setIsKernelLoaded(true);
    return;

    await init();
    setBootloaderLoaded(true);

    loginComplete().then(() => {
      setUserAuthStatus(true);
    });

    kernelLoaded().then(() => {
      setIsKernelLoaded(true);
    });

    logoutComplete().then(() => {
      setUserAuthStatus(false);
    });
  };

  const login = () => {
    openAuthWindow();
  };

  return {
    userAuthStatus,
    bootloaderLoaded,
    isKernelLoaded,
    login,
  };
};

export default useKernelAuth;
