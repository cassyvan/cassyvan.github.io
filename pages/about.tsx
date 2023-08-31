import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="h-[40rem] w-[60rem]">
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
        <p>
          My journey has led me to work alongside a diverse array of
          individuals, spanning from startups to mid-size companies. Always
          hungry for knowledge, I embrace every opportunity to learn and grow.
        </p>
        <br></br>
        <p>
          Beyond coding and debugging, you'll find me engrossed in solving
          puzzles—murder mysteries happen to be my absolute favorite. When I'm
          not in front of a screen, I love spending quality time with my
          four-legged companion, indulging in long walks and playful moments.
        </p>
      </div>
      <Image
        src={"/images/laptop.avif"}
        width={350}
        height={300}
        className="border rounded-full"
        alt={"laptop"}
      />
      <Image
        src={"/images/lightbulb.jpg"}
        width={200}
        height={300}
        className="border rounded-full"
        alt={"lightbulb"}
      />
    </div>
  );
};

export default AboutPage;
