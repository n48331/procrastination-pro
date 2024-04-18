"use client";
import { deleteProject } from '@/api/projectOps';
import { useParams,useRouter  } from 'next/navigation';

const ProjectView = () => {
  const params = useParams();
  const router = useRouter()
  const {id} = params;
const handleDelete = async () => {
  if (window.confirm("Are you sure you want to delete this project?")) {
    try {
      await deleteProject(id);
      alert("Project deleted successfully!");
      router.push('/projects');
    } catch (error) {
      alert(`Failed to delete the project`);
    }
  }
}


    return (
        <>
        <div className="flex items-center text-gray-800">
  <div className="p-4 w-full">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-md rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Project ({id})</div>
            <div className="font-bold text-lg">1259</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-md rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Orders</div>
            <div className="font-bold text-lg">230</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-md rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">New Clients</div>
            <div className="font-bold text-lg">190</div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 cursor-pointer" onClick={() => router.push(`${id}/addtask`)}>
        <div className="flex flex-row bg-white shadow-md rounded p-4">
          <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div  className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">Add task</div>
            <div className="font-bold text-lg">$ 32k</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="p-6 overflow-scroll px-0">
  <table className="mt-4 w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Project <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Teamlead <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Function <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Deadline <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Actions</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">React Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg" alt="John Michael" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">John Michael</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">john@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Manager</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Organization</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md" >
              <span className="">Completed</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Angular Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg" alt="Alexa Liras" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Alexa Liras</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">alexa@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-purple-500/20 text-purple-600 py-1 px-2 text-xs rounded-md" >
              <span className="">active</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">23/04/18</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Tailwind Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg" alt="Laurent Perrier" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laurent Perrier</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">laurent@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Executive</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Projects</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-yellow-500/20 text-yellow-600 py-1 px-2 text-xs rounded-md" >
              <span className="">Scheduled	
</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">19/09/17</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Laravel Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt="Michael Levi" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Michael Levi</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">michael@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Programator</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Developer</p>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md" >
              <span className="">Completed</span>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">24/12/08</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Astro Project</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg" alt="Richard Gran" className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"/>
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Richard Gran</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">richard@creative-tim.com</p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="flex flex-col">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Manager</p>
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Executive</p>
          </div>
        </td>
        <td className="p-4">
          <div className="w-max">
            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md" >
              <span className="">Pending</span>
            </div>
          </div>
        </td>
        <td className="p-4">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">04/10/21</p>
        </td>
        <td className="p-4">
          <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
              </svg>
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <br /><br />
  <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete Project</button>
</div>
<footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-500  py-1">
          Made with <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" className="text-gray-900 hover:text-gray-800" target="_blank">Soft UI</a> by <a href="https://www.creative-tim.com" className="text-gray-900 hover:text-gray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
</>
    );
    }

export default ProjectView;