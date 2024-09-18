import SectionLogo from "./components/imgs/undraw_website_bfhb.svg";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex space-x-6 px-6 flex-col-reverse md:flex-row">
        <div className="md:w-1/2 flex flex-col space-y-5 justify-center py-6 md:text-left ">
          <h1 className="font-bold text-3xl">
            samaedfa Rapidly build modern websites without ever leaving your
            HTML.
          </h1>
          <p>
            A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
          <button className="self-center md:self-start text-white rounded-full py-2 px-6 bg-orange-600 hover:bg-slate-600">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={SectionLogo} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
