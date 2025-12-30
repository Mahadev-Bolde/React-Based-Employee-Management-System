import React from "react";

export default function CompleteTask({ data }) {
  return (
    <div className="h-full w-[300px] shrink-0 p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 text-sm py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-2 ">
        <button className="w-full bg-green-500">Completed</button>
      </div>
    </div>
  );
}
