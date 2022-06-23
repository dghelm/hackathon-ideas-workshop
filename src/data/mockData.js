export const mockProfileAvatar =
  'https://images.unsplash.com/photo-1588820502373-625223afa4ce?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHx3aGl0ZSUyMCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib:rb-1.2.1&auto:format&fit:crop&w:800&q:60';

export const mockUserProfile = {
  userId: 'abcdef0123456789',
  username: 'mockUser',
};

export const mockHackerAvatar =
  'https://images.unsplash.com/photo-1612459284970-e8f027596582?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:668&q:80';

export const mockIdeas = [
  {
    id: 12345,
    userId: 'fd06ecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab',
    userName: 'dghelm',
    avatarUrl:
      'https://siasky.net/MABJtvAWAy6owdjwoEhWJDMy1C6uOkqYee4WgCiE6IYMpA',
    title: 'Fungible NFTs',
    text: 'I want to make a really cool platform to revolutionizing NFTs by introducing that which they lack: fungibility. I have a rough outline of the solidity code, but would love help with creating a user interface.',
    ext: {
      event: 'eth-newyork',
      prizeTrack: 'public-goods',
      techStack: ['skynet', 'react', 'ethersjs'],
      seekingTeam: true,
    },
    ts: 0, // maybe we'll use postedAt instead
  },
  {
    id: 123456,
    userId: 'faceecf9d4adec6303461382225a294cc49e8eae542e1d8623dc271284e61cab',
    userName: '',
    avatarUrl: '',
    title: 'Decentralized API repository',
    text: 'I want to make a permissionless way for developers to add their Kernel modules to a public repository, similar to npm.',
    ext: {
      event: 'eth-newyork',
      prizeTrack: 'skynet',
      techStack: ['skynet', 'flutter'],
      seekingTeam: false,
    },
    ts: 0, // maybe we'll use postedAt instead
  },
];
