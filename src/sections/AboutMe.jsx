const AboutMe = () => {
  return (
    <main id="about"
      className="w-3/4 h-auto mx-auto p-28 flex flex-col pt-[6rem] md:flex-row bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg items-center mt-60"
    >
      {/* Avatar Section */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="My Avatar"
          className="rounded-full w-40 h-40 shadow-md border-4 border-white"
        />
      </div>

      {/* About Me Text Section */}
      <div className="space-y-6 max-w-2xl mx-auto flex flex-col justify-center items-center md:ml-8 mt-6 md:mt-0">
        <h2 className="font-extrabold text-4xl text-white text-center">About Me</h2>
        <p className="text-lg text-white text-center leading-7">
          Hi, I'm a passionate student at a coding institute, driven by a love for creating and
          exploring technology. I'm honing my skills in web development, problem-solving, and
          innovative design. My journey in coding has been an exciting mix of challenges and
          achievements, and I'm always eager to learn and grow.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
