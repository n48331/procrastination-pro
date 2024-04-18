import Link from "next/link";

const TaskList = ({tasks}:any) => {
  const colors:any = {
    'In Progress': ' text-blue-600',
    'Pending': ' text-red-600',
    'On Hold': ' text-yellow-600',
    'Completed': ' text-green-600',

};
    return (
       <>
        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">All Taska</h3>
            <Link href="/tasks" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
              View all
            </Link>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
             {tasks.map((task:any) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
              
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                     {task.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">{task.projectName}</a>
                    </p>
                  </div>
                  <div className={`inline-flex items-center text-base font-semibold ${colors[task.status]}`}>
                  {task.status}
                  </div>
                </div>
              </li>
             ))}

            </ul>
          </div>
        </div>
        
       </>
    );
}

export default TaskList;