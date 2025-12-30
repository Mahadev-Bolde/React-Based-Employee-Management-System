import React from "react";

export default function TaskListNumber({ data }) {
  return (
    <div className="mt-7 flex justify-between gap-5 screen">
      <div className="w-[45%] py-6 px-9 bg-blue-400 rounded-xl">
        <h2 className="text-3xl text-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl text-medium">New Task </h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-green-400 rounded-xl">
        <h2 className="text-3xl text-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl text-medium">completed Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-yellow-400 rounded-xl">
        <h2 className="text-3xl text-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl text-medium">Accepted Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-red-400 rounded-xl">
        <h2 className="text-3xl text-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl text-medium">failed Task</h3>
      </div>
    </div>
  );
}
