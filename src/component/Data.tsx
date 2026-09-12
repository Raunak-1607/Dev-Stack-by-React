import { use, useState } from 'react';
import type { Technology } from '../Type/Type';
import AvailableTech from './AvailableTech';

interface dataProps {
    DevPromise : Promise<Technology[]>
}

const Data = ({DevPromise} : dataProps) => {
    const technology = use(DevPromise)
    // console.log(technology)
    const [selectedTech, setSelectedTech] = useState<Technology[]>([])
    return (
        <div className='container mx-auto'>
            <div>
                 <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                  Explore the{" "}<span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Technologies </span> </h2>

                  <p className="mt-3 text-xl text-slate-500">Pick one technology per category to build your ideal stack.</p>
            </div>

            <AvailableTech technology={technology} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></AvailableTech>
        </div>
    );
};

export default Data;
