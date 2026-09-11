import type { Technology } from '../Type/Type';
import DataCard from './DataCard';

interface availableProps {
    technology: Technology[]
}

const AvailableTech = ({technology}:availableProps) => {
    // console.log(technology , "Available")
    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                technology.map((technologies: Technology) => (
                    <DataCard key={technologies.id} technologies={technologies} />
                ))
            }
        </div>
    );
};

export default AvailableTech;
