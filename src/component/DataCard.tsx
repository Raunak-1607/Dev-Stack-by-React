import { type Dispatch, type SetStateAction } from 'react';
import type { Technology } from '../Type/Type';
import { toast } from 'react-toastify';

interface CardProps {
    technologies: Technology,
    selectedTech: Technology[],
    setSelectedTech: Dispatch<SetStateAction<Technology[]>>
}

const DataCard = ({ technologies, selectedTech, setSelectedTech }: CardProps) => {
    const { name, category, description, icon, rating, difficulty, badge } = technologies;

    
    const isSelected = selectedTech.some(tech => tech.name === name);

    const handleBtn = () => {
        toast.success(`${name} is selected`);
        setSelectedTech([...selectedTech, technologies]);
    }

    return (
        <div className={`flex min-h-72 flex-col rounded-xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${isSelected ? 'border-red-500' : 'border-slate-100'}`}>
            <div className="flex items-start justify-between gap-3">
                <img className="h-8 w-8 object-contain" src={icon} alt={`${name} logo`} />
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-600">
                    {badge}
                </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
            <p className="mt-2 min-h-15 text-sm leading-5 text-slate-500">{description}</p>

            <div className="mt-auto grid grid-cols-3 border-y border-slate-100 py-2 text-xs text-slate-500">
                <span>{category}</span>
                <span className="text-center">{difficulty}</span>
                <span className="text-right text-amber-500">★ {rating}</span>
            </div>
            <button 
                onClick={handleBtn}
                type="button" 
                className="mt-3 rounded-md bg-slate-950 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                disabled={isSelected} >
                {isSelected ? "Selected" : "Add to Stack"}
            </button>
        </div>
    );
};

export default DataCard;
