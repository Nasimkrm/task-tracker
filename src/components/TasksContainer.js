import Navbar from "./Navbar";
import NewTask from "./NewTask";
import ShowTasks from "./ShowTasks";

const TasksContainer = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <NewTask />
      <ShowTasks />
    </div>
  );
};

export default TasksContainer;
