import {myExperience} from "./file"

export default function Experience() {
  return (
    <div className="text-justify text-lg font-serif">
      <div className="text-2xl mt-10 mb-5">
        <h1 className="font-bold">Experience</h1>
      </div>
      <div>
        {
          myExperience.map((item, i)=>{
            return (
              <div className="flex flex-wrap" key={i}>
                <div className="md:w-1/4 text-[20px] mt-2">
                  <h2 className="text-bol">{item.date}</h2>
                </div>
                <div className="text-justify mt-2 mb-4 md:w-3/4">
                  <h2 className="font-bold">{item.role}</h2>
                  <p>{item.experience}</p>
                </div>
              </div>
            );
          })
        }
        
      </div>
    </div>
  );
}
