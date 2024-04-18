import {  FaRegClock } from "react-icons/fa";

const Card = ({ title, description,pendingTasks }:any) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{description}</span>
        <h3 className="text-base font-normal text-gray-500">{title}</h3>
      </div>
      {pendingTasks && 
      <div title="Pending" className="ml-5 w-0 flex gap-1 items-center justify-end flex-1 text-red-500 text-base ">
     <span className="font-bold"> {pendingTasks}</span>
      <FaRegClock />
      </div>
      }
    </div>
  </div>
  );
}

export default Card;