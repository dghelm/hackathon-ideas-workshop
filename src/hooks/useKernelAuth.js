import { useState, useEffect } from 'react';
import { init, loginComplete, logoutComplete, openAuthWindow } from 'libkernel';
import { kernelLoaded } from 'libkernel/dist/auth'; //this should be exported from libkernel

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
