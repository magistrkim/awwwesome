import BentoCard from "./BentoCard";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="text-blue-50 font-circular-web text-lg">
            Into the MetaGame Layer
          </p>
        </div>
        <p className="max-w-md text-blue-50 font-circular-web text-lg opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into a interconnected overlay experience on
          your world.
        </p>
      </div>
      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard />
      </div>
    </section>
  );
};

export default Features;
