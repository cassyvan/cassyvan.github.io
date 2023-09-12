import Image from "next/image";

interface props {
  imageUrl: string;
  content: JSX.Element;
  imageTitle: string;
}

const AboutItemReversed = ({ imageUrl, content, imageTitle }: props) => {
  return (
    <div className="col-span-1 shadow-md p-4 mt-2 flex flex-col items-center dark:shadow-dark sm:flex-col-reverse sm:shadow-none sm:px-2 sm:mt-0">
      <div>{content}</div>
      <Image
        src={imageUrl}
        width={350}
        height={350}
        alt={imageTitle}
        className="py-3"
      />
    </div>
  );
};

export default AboutItemReversed;
