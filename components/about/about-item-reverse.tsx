import Image from "next/image";

interface props {
  imageUrl: string;
  content: JSX.Element;
  imageTitle: string;
}

const AboutItemReversed = ({ imageUrl, content, imageTitle }: props) => {
  return (
    <div>
      <div>{content}</div>
      <Image src={imageUrl} width={250} height={250} alt={imageTitle} />
    </div>
  );
};

export default AboutItemReversed;
