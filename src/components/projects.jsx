import {Link} from "react-router-dom";
import {myProjects} from "./file"

export default function Projects() {
  return (
    <div className="font-serif text-justify">
      <div className="font-bold text-2xl mt-10 mb-5">
        <h1>Projects</h1>
      </div>
      <div className=" ">
       {
        myProjects.map((item, i)=>{
          return (
            <Link
              to={item.url}
              target="_blank"
              className="flex flex-wrap mb-16 hover:opacity-[0.5] shadow-md p-4"
            >
              <div className="md:w-1/3 ">
                <img
                  src={item.image}
                  alt={item.projectName}
                  className="md:w-[16rem] "
                />
              </div>
              <div className="md:w-3/5 md:ml-4 ">
                <h2 className="font-bold text-[20px] mt-4">
                  {item.projectName}
                </h2>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })
       }
      </div>
    </div>
  );
}
