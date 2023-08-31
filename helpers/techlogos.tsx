export const getTechLogos = (theme: string | undefined) => {
  const react = { imagesrc: "/images/techicons/react.svg", name: "React" };

  const javascript = {
    imagesrc: "/images/techicons/javascript.svg",
    name: "JavaScript",
  };

  const java = { imagesrc: "/images/techicons/java.svg", name: "Java" };

  const npm = { imagesrc: "/images/techicons/npm.svg", name: "NPM" };

  const tailwindCSS = {
    imagesrc: "/images/techicons/tailwind-css.svg",
    name: "Tailwind CSS",
  };

  const mongoDB = {
    imagesrc: "/images/techicons/mongodb.svg",
    name: "MongoDB",
  };

  const nextJS = {
    imagesrc:
      theme === "light"
        ? "/images/techicons/nextjs.svg"
        : "/images/techicons/nextjs-dark.svg",
    name: "NextJS",
  };

  const typeScript = {
    imagesrc:
      theme === "light"
        ? "/images/techicons/type-script.svg"
        : "/images/techicons/typescript-dark.svg",
    name: "TypeScript",
  };

  const aws = {
    imagesrc:
      theme === "light"
        ? "/images/techicons/aws.svg"
        : "/images/techicons/aws-dark.svg",
    name: "AWS",
  };

  return [
    react,
    nextJS,
    typeScript,
    javascript,
    tailwindCSS,
    java,
    aws,
    mongoDB,
    npm,
  ];
};
