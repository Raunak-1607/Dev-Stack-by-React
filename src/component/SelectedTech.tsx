import React, { type Dispatch, type SetStateAction } from 'react';
import type { Technology } from '../Type/Type';

interface selectedProps {
 technology : Technology[],
  selectedTech : Technology[],
 setSelectedTech : Dispatch<SetStateAction<Technology[]>>
}

const SelectedTech = ({ selectedTech }: selectedProps) => {
    console.log(selectedTech, "SelectedTech");
    return (
        <div className="mt-8 w-full max-w-71 rounded-2xl border border-slate-100 bg-white   p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">Your Stack</h2>
                        <p className="mt-1 text-sm text-slate-400">
                                 {selectedTech.length ? `${selectedTech.length} technologies selected.` : 'Your stack is empty.'}
                        </p>

              <div className="mt-4 flex h-17 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
                                     {/* {selectedTech.length ? `${selectedTech.length} technologies selected.` : 'Your stack is empty.'} */}
              </div>
          </div>
    );
};

export default SelectedTech;