import Image from "next/image";

interface props {
  imageUrl: string;
  content: JSX.Element;
  imageTitle: string;
}

const AboutItem = ({ imageUrl, content, imageTitle }: props) => {
  return (
    <div className="col-span-1 shadow-md p-4 flex flex-col items-center dark:shadow-dark sm:shadow-none sm:p-2">
      <Image
        src={imageUrl}
        width={350}
        height={350}
        alt={imageTitle}
        className="my-3"
      />
      <div>{content}</div>
    </div>
  );
};

export default AboutItem;
