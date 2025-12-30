import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="p-5 bg-[#1c1c1c] mt-3 rounded  mb-10">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Emloyee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div className=" ">
        {userData.map((el, idx) => {
          return (
            <div
              className="border-1 border-emerald-500  mb-4 py-2 px-4 flex justify-between rounded "
              key={idx}>
              <h2 className="w-1/5 text-lg font-medium ">{el.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-400">
                {el.taskNumbers.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-400">
                {el.taskNumbers.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-green-400">
                {el.taskNumbers.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium text-red-600">
                {el.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
