import Image from "next/image";

interface props {
  imageUrl: string;
  content: JSX.Element;
  imageTitle: string;
}

const AboutItem = ({ imageUrl, content, imageTitle }: props) => {
  return (
    <div className="col-span-1">
      <Image src={imageUrl} width={250} height={250} alt={imageTitle} />
      <div>{content}</div>
    </div>
  );
};

export default AboutItem;
