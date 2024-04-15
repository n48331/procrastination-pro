import Image from "next/image";
import Card from "./components/Dashboard/Card";
import TaskList from "./components/Tasks/TaskList";
import Overview from "./components/Tasks/Overview";

export default function Dashboard() {
  return (
    <>
      <main>
        <div className="pt-6 px-4">

          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card title="Projects" description="8" />
          <Card title="Projects" description="8" />
           
         
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <TaskList/>
        <Overview/>
          </div>
        </div>
      </main>

      
    </>
  );
}
