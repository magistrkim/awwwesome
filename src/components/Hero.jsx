const Hero = () => {
  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
            <div>
              MiniVideoPlayer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
