import type { Technology } from '../Type/Type';
import DataCard from './DataCard';

interface availableProps {
    technology: Technology[]
}

const AvailableTech = ({technology}:availableProps) => {
    // console.log(technology , "Available")
    return (
       <div className='flex gap-4'>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                technology.map((technologies: Technology) => (
                    <DataCard key={technologies.id} technologies={technologies} />
                ))
            }
          </div>

          <div className="mt-8 w-full max-w-71 rounded-2xl border border-slate-100 bg-white   p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
            <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>

              <div className="mt-4 flex h-17 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
                   Your stack is empty.
              </div>
          </div>
       </div>
    );
};

export default AvailableTech;
