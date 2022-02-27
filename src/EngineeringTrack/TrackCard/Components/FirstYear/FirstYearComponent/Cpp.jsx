import React from 'react'
import CardDetails from '../CardDetails';
const Cpp = () => {
    var titles=[
        {
          youtube:"https://www.youtube.com/embed/LQKYXnxCiU0",
          title:'Introduction, Datatypes, Variables, Comments in C++ | Lecture 1| C++ Programming | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        },
        {
          youtube:"https://www.youtube.com/embed/LQKYXnxCiU0",
          title:'Introduction, Datatypes, Variables, Comments in C++ | Lecture 1| C++ Programming | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        },
        {
          youtube:"https://www.youtube.com/embed/LQKYXnxCiU0",
          title:'Introduction, Datatypes, Variables, Comments in C++ | Lecture 1| C++ Programming | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        }
    ];
    console.log(titles);
    console.log(titles[0]);
  return (
    <div>
        <header>C++ Tutorials</header>
        {
          titles.forEach(element=>{
            // <CardDetails data={element} />
            console.log(element);
          })
        }
        <CardDetails data={titles[0]} />
    </div>
  )
}

export default Cpp