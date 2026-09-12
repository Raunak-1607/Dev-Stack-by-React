import type { Technology } from '../Type/Type';

interface CardProps {
    technologies: Technology
}

const DataCard = ({ technologies }: CardProps) => {
    const { name, category, description, icon, rating, difficulty, badge } = technologies;

    return (
        <div className="flex min-h-72 flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
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
            <button type="button" className="mt-3 rounded-md bg-slate-950 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800">
                Add to Stack
            </button>
        </div>
    );
};

export default DataCard;
