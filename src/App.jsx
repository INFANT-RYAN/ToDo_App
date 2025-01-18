import { useState } from "react";

export default function App() {
  

  const [tasks, setTasks] = useState([]);
  const [ntask, setNewTask] = useState("");

  function addTask() {
    if (ntask.trim() !== "") {
      setTasks([...tasks, ntask]);
      setNewTask("");
    } else alert("Enter task before add");
  }
  function inputChange(event) {
    setNewTask(event.target.value);
  }
  function delTask(index) {
    const utask = tasks.filter((_, i) => i !== index);
    setTasks(utask);
    console.log(utask);
  }

  return (
    <div className="mx-auto container flex justify-center items-center md:bg-[#14213d]  md:min-h-screen">
      <div className="border-2 bg-white border-[#fca311] md:w-[40%] min-h-screen min-w-full  md:h-96  rounded-lg p-5">
      <h1 className="font-bold text-3xl text-[#14213d] text-center">To-Do</h1>
      <div className="flex justify-center my-5 w-[100%]">
        <input
          type="text"
          className="border-2 w-[80%] h-10  rounded-md  p-2"
          value={ntask}
          onChange={inputChange}
        />
        <button
          className="  text-[#14213d] font-semibold bg-[#fca311] rounded-md h-10 w-14"
          onClick={addTask}
        >
          ADD
        </button>
      </div>
      <div className="flex justify-center w-[100%]">
        <ol className="w-[90%]">
          {tasks.map((t, index) => (
            <li className="bg-[#fca311] p-2 rounded-md my-2 " key={index}>
              <div className="flex justify-between">
                <span>{t}</span>
                <button
                  className="bg-white px-1 rounded-sm text-[#14213d] font-semibold   "
                  onClick={() => delTask(index)}
                >
                  Done
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
}
