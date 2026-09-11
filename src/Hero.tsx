
import Pic from './assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div>
                <h1 className='text-6xl font-extrabold text-slate-900'>Build Your Ideal <br/> 
                <span className='bg-linear-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='mt-4 '>Explore frontend, backend, database, and tooling options,<br/>
                compare them side by side, and put together the stack that fits your next project</p>

                <div className="flex gap-3 mt-14">
                   <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold">
                       Explore Technologies
                   </button>

                   <button className="rounded-2xl px-8 py-4 text-xl text-gray-700 border-2 border-gray-200">
                      Learn More
                   </button>
               </div>

            </div>
            <div>
                <img src={Pic} alt="" />
            </div>
        </div>
    );
};

export default Hero;