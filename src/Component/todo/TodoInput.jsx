import React, { useContext } from "react";
import { TodoContext, useTodo } from "../../context/TodoContext";

const TodoInput = () => {
  // const {handleChange, handleTask, task, updateTask, upId} = useContext(TodoContext)

  const {
    handleChange,
    handleTask,
    task,
    updateTask,
    upId,
    count,
    setCount,
    note,
    setNote,
    num,
    setNum,
    handleTodo
  } = useTodo();

  return (
    <>
      <div className="w-full max-w-full p-3 rounded-3xl border bg-white  p-1">
        <div className=" flex">
          <input
            value={task}
            onChange={handleChange}
            className="border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 font-bold leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Add Task Title"
          />
          <input type="checkbox" onChange={() => { setNum(1); setCount(false)}} className="translate-x-[-30px]" />
          {!upId ? (
            <button
              onClick={handleTask}
              className="p-1 rounded-full border border-amber-100 hover:bg-slate-400 bg-slate-200 "
            >
              ➕
            </button>
          ) : (
            <button
              onClick={updateTask}
              className="p-1 rounded-full border border-amber-100 hover:bg-slate-400 bg-slate-200 "
            >
              🖋️
            </button>
          )}
        </div>
        <div className="w-[90%]">
          {count && (
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="shadow m-2 bg-gray-300 appearance-none border-0 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Add Todo"
            />
          )}
          {
            [...Array(num)].map((ele, index)=>(
                <input
                onChange={(e) => handleTodo(e, index)}
            className="border shadow appearance-none rounded w-full py-1 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="✅ Add Todo"
          />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default TodoInput;
