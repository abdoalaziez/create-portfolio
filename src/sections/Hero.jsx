import searche from "../assets/searche.jpg";

const Hero = () => {
  return (
    <main
      id="hero"
      className="flex flex-col md:flex-row items-center rounded-md h-screen gap-8 px-5 bg-gradient-to-b from-green-900 to-blue-500"
    >
      <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
        <h1 className="font-bold text-5xl text-white leading-tight">
          Hi' I'm Umran &copy;  
        </h1>
        <p className="text-lg text-white leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla eveniet eaque
          voluptatibus sunt. Deserunt, atque mollitia eaque fuga cum dolores nesciunt magni
          laboriosam maiores nulla eos, assumenda itaque voluptatum?
        </p>
        <button
          onClick={() => alert("Hire Me!")}
          className="bg-white text-green-800 py-3 px-12 rounded-full hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-white focus:ring-offset-2 outline-none transition-all"
        >
          Hire Me!
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={searche}
          alt="Profile"
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-2xl border-4 border-white"
        />
      </div>
    </main>
  );
};

export default Hero;
