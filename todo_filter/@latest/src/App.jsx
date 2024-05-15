import React from "react";
import Input from "./Input.jsx";
import Tasks from "./Tasks.jsx";
import { useState } from "react";
const App = () => {
  const [tasks, settasks] = useState([]);

  const addtask = (task) => {
    settasks((prevtask) => {
      const updatedTask = [...tasks, task];

      return updatedTask;
    });
  };

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  const filter = () => {
    settasks(tasks.filter((task) => task.completed === true));
  };

  const checkTask = (id) => {
    settasks(
      tasks.map((taask) => {
        if (taask.id === id) {
          return { ...taask, completed: true };
        } else {
          return taask;
        }
      })
    );
  };

  return (
    <div className=" text-3xl fill-slate-400 shadow-md min-h-[500px] min-w-[400px]  w-[40vw]  font-poppins text-center flex flex-col justify-start gap-y-40 p-4">
      <div className=" flex flex-row gap-5 justify-between p-4 ">
        <button
          onClick={filter}
          className="border-2 border-black p-2 text-sm hover:bg-blue-500 hover:fill-white"
        >
          Filter
        </button>
      </div>
      <Input addtask={addtask} />
      <Tasks tasks={tasks} del={deleteTask} check={checkTask} />
    </div>
  );
};

export default App;
