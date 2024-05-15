import React from "react";
import { useState } from "react";

const Input = ({ addtask }) => {
  const [taskk, settaskk] = useState("");
  const handlebtnclick = (e) => {
    e.preventDefault();
    let taskobj = {
      id: Date.now() + Math.random(),
      title: taskk,
      completed: false,
    };
    addtask(taskobj);
    console.log(taskobj);
    // settaskk("");
  };

  return (
    <div>
      <form onSubmit={handlebtnclick}>
        <label htmlFor="task">
          Task:-
          <input
            id="task"
            type="text"
            className="p-2 border-black rounded-xl m-4 shadow-xl w-[50%]"
            onChange={(e) => settaskk(e.target.value)}
          />
        </label>
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
