import ImageClipBox from "./ImageClipBox";

const Contacts = () => {
  return (
    <section id="contacts" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg text-blue-50 bg-black py-24 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
          <ImageClipBox />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
