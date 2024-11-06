// "use client"
// import { Link1Icon } from '@radix-ui/react-icons'
// import React, { use, useState } from 'react'

// const page = () => {
//   const[title,settitle]=useState("")
//   const[desc,setdesc]=useState("")
//   const[mainTask,setMainTask]=useState([])
//   const submitHandler =(e)=>{
//     e.preventDefault()
//     setMainTask([...mainTask, {title,desc}]);
//     settitle("")
//     setdesc("")
  
//   };
//   const deleteHendler =(i) =>{
//    let copyTask =[...mainTask] 
//    copyTask.splice(i,1)
//    setMainTask ( copyTask)
//   };
//   let randerTask = <h2>no task avalible</h2>
//   if (mainTask.length>0){
//     randerTask = mainTask.map((t,i)=>{
//       return(
//         <li key={i} className='flex item-center justify-between mb-9'> 
//         <div className='flex justify-between w-2/3'>
//         <h4>{t.title}</h4>
//         <h4>{t.desc}</h4>
//       </div>
//       <button
//       onClick={() =>{ deleteHendler(i)}} className='bg-red-400 text-white rounded font-bold'>Delete</button>
//       </li>
       
//       )
//     })
//   }

//   return (
//     <div className='bg-blue-300'>
//       <h1 className=' font-bold bg-black text-white py-5 text-5xl text-center'> Rida's Todo list</h1>
//       <form onSubmit={submitHandler}>
//         <input type="text" className='text-2xl border-black border2 m-8 px-2 py-2 '
//         placeholder='Enter task here'
//         value={title}
//         onChange={(e)=>{
//           settitle(e.target.value)
//         }} />
//         <input type="text" className='text-2xl border-black border2 m-8 px-2 py-2 '
//         placeholder='Enter description here'  value={desc}
//         onChange={(e)=>{
//           setdesc(e.target.value)}}
//           />
//       <button className='px-4 py-2 m-2 text-2xl bg-black text-white'>Add task</button>
      
//       </form>
//       <hr />
//       <div className='p-8 bg-pink-200'>
// <ul>
//   {randerTask}
// </ul>
//       </div>
//     </div>
//   )
// }

// export default page
"use client";
import React, { useState, FormEvent } from 'react';

interface Task {
  title: string;
  desc: string;
}

const Page: React.FC = () => { 
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [mainTask, setMainTask] = useState<Task[]>([]);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i: number): void => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask: JSX.Element[] = []; // Explicitly declaring renderTask as JSX.Element array
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="flex item-center justify-between mb-9">
        <div className="flex justify-between w-2/3">
          <h4>{t.title}</h4>
          <h4>{t.desc}</h4>
        </div>
        <button
          onClick={() => { deleteHandler(i); }}
          className="bg-red-400 text-white rounded font-bold"
        >
          Delete
        </button>
      </li>
    ));
  } else {
    renderTask = [<h2 key="no-tasks">No tasks available</h2>]; // Ensure this is also JSX.Element[] array
  }

  return (
    <div className="bg-blue-300">
      <h1 className="font-bold bg-black text-white py-5 text-5xl text-center">Rida's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-black border-2 m-8 px-2 py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          type="text"
          className="text-2xl border-black border-2 m-8 px-2 py-2"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => { setDesc(e.target.value); }}
        />
        <button className="px-4 py-2 m-2 text-2xl bg-black text-white">Add task</button>
      </form>
      <hr />
      <div className="p-8 bg-pink-200">
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  );
};

export default Page;

