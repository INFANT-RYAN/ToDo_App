import { useState } from "react";

export default function ToDo() {
  

  const [tasks, setTasks] = useState(["hi", "hello"]);
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
    <div className="border-2 bg-white border-[#fca311] w-[40%] h-96 rounded-lg p-5">
      <h1 className="font-bold text-3xl text-[#14213d] text-center">To-Do</h1>
      <div className="flex justify-center my-5 w-[100%]">
        <input
          type="text"
          className="border-2 w-[80%] h-10  rounded-md  p-2"
          value={ntask}
          onChange={inputChange}
        />
        <button
          className="w-[10%]  text-[#14213d] font-semibold bg-[#fca311] rounded-md"
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
  );
}
