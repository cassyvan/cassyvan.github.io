import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center relative h-[40rem]">
      <div className="max-w-4xl pr-12">
        <h1 className="pb-8">About</h1>
        <div className="border-solid border-2">
          <p>
            Hi! I'm Cassy, a passionate and dedicated software developer with a
            keen focus on web development.
          </p>
          <br></br>
          <p>
            In a former life, I donned the scrubs as a Registered Nurse before
            making the exciting leap into the world of technology.
          </p>
          <br></br>
          <p>
            My journey has led me to work alongside a diverse array of
            individuals, spanning from startups to mid-size companies.
          </p>
          <p>
            Always hungry for knowledge, I embrace every opportunity to learn
            and grow.
          </p>
          <br></br>
          <p>
            Beyond coding and debugging, you'll find me engrossed in solving
            puzzles—murder mysteries happen to be my absolute favorite. When I'm
            not in front of a screen, I love spending quality time with my
            four-legged companion, indulging in long walks and playful moments.
          </p>
        </div>
        <div className="flex absolute right-80 top-36">
          <Image
            src={"/images/laptop.avif"}
            width={250}
            height={200}
            className="border rounded-full "
            alt={"laptop"}
          />
          <Image
            src={"/images/lightbulb.jpg"}
            width={150}
            height={300}
            className="border rounded-full animate-lightbulb absolute -bottom-4 -right-12"
            alt={"lightbulb"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
