export const getTechLogos = (theme: string | undefined) => {
  const react = "/images/techicons/react.svg";

  const javascript = "/images/techicons/javascript.svg";

  const java = "/images/techicons/java.svg";

  const npm = "/images/techicons/npm.svg";

  const tailwindCSS = "/images/techicons/tailwind-css.svg";

  const mongoDB = "/images/techicons/mongodb.svg";

  const nextJS =
    theme === "light"
      ? "/images/techicons/nextjs.svg"
      : "/images/techicons/nextjs-dark.svg";

  const typeScript =
    theme === "light"
      ? "/images/techicons/type-script.svg"
      : "/images/techicons/typescript-dark.svg";

  const aws =
    theme === "light"
      ? "/images/techicons/aws.svg"
      : "/images/techicons/aws-dark.svg";

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
