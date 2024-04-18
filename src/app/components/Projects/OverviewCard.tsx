import React, { ReactNode } from 'react';

interface OverviewCardProps {
    children: ReactNode;
    color: string;
    desc: string;
    count: number;
    }

const OverviewCard = ({ children,color,desc ,count}: OverviewCardProps) => {
    
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-md rounded p-4">
                <div className={`flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 ${color}`}>
                    {children}
                </div>
                <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">{desc} </div>
                    <div className="font-bold text-lg">{count}</div>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;