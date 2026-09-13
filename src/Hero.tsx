
import Pic from './assets/banner-stack.png'

const Hero = () => {
    return (
       <div className="container mx-auto px-5 md:px-8">
  <div className="flex flex-col items-center justify-between gap-10 py-10 md:flex-row md:gap-8 lg:py-16">

    
    <div className="w-full text-center md:w-1/2 md:text-left">

      <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Build Your Ideal <br />

        <span className="bg-linear-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>

      <p className="mx-auto mt-4  text-slate-600 sm:text-lg md:mx-0">
        Explore frontend, backend, database, and tooling options,
        compare them side by side, and put together the stack that fits
        your next project.
      </p>

     
      <div className="mt-8 flex flex-row gap-3 justify-center md:mt-10 md:justify-start">

        <button className="w-full rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3 text-base font-semibold text-white sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
          Explore Technologies
        </button>

        <button className="w-full rounded-2xl border-2 border-gray-200 px-6 py-3 text-base text-gray-700 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
          Learn More
        </button>

      </div>
    </div>

    
    <div className="flex w-full justify-center md:w-1/2">
        <img
            src={Pic}
           alt="Development Stack"
           className="w-[380px] max-w-full sm:w-[420px] md:w-[400px] lg:w-[500px]"/>
   </div>

  </div>
</div>
    );
};

export default Hero;