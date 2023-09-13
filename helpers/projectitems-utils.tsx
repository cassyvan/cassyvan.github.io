const getProjectList = () => {
  const myPortfolio = {
    projectName: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    projectDesc: [
      <p key={1}>
        A place to feature some projects I have been working on, as well as a
        space to share some of my writing. Built with{" "}
        <span className="block bg-red-300 dark:bg-sky-200 inset-0 skew-y-2 relative inline-block">
          Next.js
        </span>{" "}
        and{" "}
        <span className="block bg-red-300 dark:bg-sky-200 inset-0 skew-y-2 relative inline-block">
          Tailwind CSS
        </span>
      </p>,
    ],
    projectDemo: "",
    projectGitHub: "https://github.com/cassyvan/myportfolio",
    key: 1,
  };

  return [myPortfolio];
};

export default getProjectList;
