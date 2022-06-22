# Consuming Decentralized APIs with Skynet Kernel

This project is the basis for a workshop built around consuming decentralized APIs made available by Skynet Kernel modules.

Specifically, it builds on the `skynet-dacs-library` to call Kernel modules using a library which abstracts the Kernel interaction. It is used to add social functionality to decentralized webapps. See: [npm](https://www.npmjs.com/package/skynet-dacs-library), [github](https://github.com/redsolver/skynet-modules/tree/main/library-ts), and [documentation](https://skystandards.hns.siasky.net/).

The repo contains the code for both mock data and a functional application for doing the following:

1. Authenticate with Skynet Kernel
2. Get your public user profile using the Profile DAC
3. Follow a group of user by adding them to your friend list, using the Social DAC
4. Add a post to your feed, with application specific metadata using the Feed DAC
5. Read the posts of other hackers, also using the Feed DAC

The style of this app focuses on isolating API logic from UI logic and creaing a functioning app with minimal complexity beyond Create React App knowledge.

For more information on Skynet Kernel, see its [repo](https://github.com/SkynetLabs/skynet-kernel/) or its [temporary documentation](http://kernel-beta.skynetlabs.io/). If you want to build a Kernel Module, see [this workshop](http://kernel-beta.skynetlabs.io/workshops/01-Part01/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
