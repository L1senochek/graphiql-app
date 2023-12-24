interface IContentWelcome {
  welcomeTitle: string;
  description: string;
  link: {
    main: {
      partOne: string;
      partTwo: string;
      partThree: string;
    };
    loginRegistr: {
      partOne: string;
      partTwo: string;
      partThree: string;
      partFour: string;
      partFive: string;
    };
  };
  title: string;
  team: {
    timur: {
      name: string;
      src: string;
      description: string;
    };
    tatyana: {
      name: string;
      src: string;
      description: string;
    };
    dmitrij: {
      name: string;
      src: string;
      description: string;
    };
  };
}

export default IContentWelcome;
