const getProjectList = () => {
  let portfolioSpanStyle =
    "block bg-red-300 dark:bg-sky-200 inset-0 skew-y-2 relative inline-block";
  const myPortfolio = {
    projectName: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    projectDesc: [
      <p key={1}>
        A place to feature some projects I have been working on. Built with{" "}
        <span className={portfolioSpanStyle}>Next.js</span> and{" "}
        <span className={portfolioSpanStyle}>Tailwind CSS</span>
        Auto deployments and hosting setup with{" "}
        <span className={portfolioSpanStyle}>Vercel</span>
      </p>,
    ],
    projectDemo: "",
    projectGitHub: "https://github.com/cassyvan/myportfolio",
    key: 1,
  };

  const myJournal = {
    projectName: "My Journal",
    imageUrl: "/images/journal.png",
    projectDesc: [
      <div key={2}>
        <p>
          A journaling app to help you keep all your thoughts, or notes, or
          whatever you like in one space. Built with{" "}
          <span className={portfolioSpanStyle}>Next.js</span>,{" "}
          <span className={portfolioSpanStyle}>Firebase</span> and{" "}
          <span className={portfolioSpanStyle}>Tailwind CSS</span>
          Auto deployments and hosting setup with{" "}
          <span className={portfolioSpanStyle}>Vercel</span>
        </p>
        <br />
        <p>
          For demo purposes, if you do not wish to make an account, then please
          use the following:{" "}
        </p>
        <p>Email: test@myjournal.com</p>
        <p>Password: test123</p>
      </div>,
    ],
    projectDemo: "https://cassysjournal.vercel.app/",
    projectGitHub: "https://github.com/cassyvan/myjournal",
    key: 2,
  };

  return [myPortfolio, myJournal];
};

export default getProjectList;
