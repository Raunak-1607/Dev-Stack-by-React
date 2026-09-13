import type { Dispatch, SetStateAction } from 'react';
import type { Technology } from '../Type/Type';
import DataCard from './DataCard';
import SelectedTech from './SelectedTech';

interface availableProps {
    technology: Technology[],
    selectedTech : Technology[],
    setSelectedTech : Dispatch<SetStateAction<Technology[]>>
}

const AvailableTech = ({technology, selectedTech , setSelectedTech}:availableProps) => {
    // console.log(technology , "Available")
    return (
       <div className='flex flex-col gap-4 sm:flex-row'>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                technology.map((technologies: Technology) => (
                    <DataCard
                        key={technologies.id}
                        technologies={technologies}
                        selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech}
                    />
                ))
            }
          </div>

          <SelectedTech technology={technology} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
       </div>
    );
};

export default AvailableTech;
