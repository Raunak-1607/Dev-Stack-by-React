import React, { type Dispatch, type SetStateAction } from 'react';
import { RxCross1 } from "react-icons/rx";
import type { Technology } from '../Type/Type';

interface selectedProps {
 technology : Technology[],
  selectedTech : Technology[],
 setSelectedTech : Dispatch<SetStateAction<Technology[]>>
}

const SelectedTech = ({ selectedTech, setSelectedTech }: selectedProps) => {
   
    const handleRemove = (techToRemove: Technology) => {
        setSelectedTech(prev => prev.filter(tech => tech.name !== techToRemove.name));
    };

    return (
        <div className="mt-8 flex w-full max-w-72 flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
            <p className="mt-1 text-sm font-medium text-slate-400">
                {selectedTech.length ? `${selectedTech.length} Technology Selected` : 'Your stack is empty.'}
            </p>

            <div className="mt-5 flex flex-col gap-3">
                {selectedTech.length === 0 ? (
                    <div className="flex h-16 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
                        No technologies selected
                    </div>
                ) : (
                    selectedTech.map((tech: Technology , index:number) => (
                        <div key={index} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 ">
                            <div className="flex items-center gap-4">
                                <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-bold text-slate-900">{tech.name}</h2>
                                    <p className="text-[11px] font-medium text-slate-500">{tech.category}</p>
                                </div>
                            </div>
                            <div className="cursor-pointer text-slate-400 hover:text-red-500" onClick={() => handleRemove(tech)}>
                                <RxCross1 size={18}  />
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedTech.length > 0 && (
                <button 
                    onClick={() => setSelectedTech([])} 
                    className="mt-6 w-full rounded-xl border border-red-400 bg-white py-2.5 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default SelectedTech;