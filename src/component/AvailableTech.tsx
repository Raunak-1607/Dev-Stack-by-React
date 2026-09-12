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
       <div className='flex gap-4'>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                technology.map((technologies: Technology) => (
                    <DataCard
                        key={technologies.id}
                        technologies={technologies}
                        selectedTech={selectedTech}
                        setSelectedTech={setSelectedTech as unknown as Dispatch<SetStateAction<object[]>>}
                    />
                ))
            }
          </div>

          <SelectedTech technology={technology} selectedTech={selectedTech} setSelectedTech={setSelectedTech}></SelectedTech>
       </div>
    );
};

export default AvailableTech;
