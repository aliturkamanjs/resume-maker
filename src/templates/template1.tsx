import clsx from "clsx"
import { HiArrowNarrowRight } from "react-icons/hi"

function TemplateOne(props: any) {
  const {
    skills,
    links,
    projects,
    education,
    experiences,
    personalDetail,
  } = props.state

  console.log(personalDetail)


  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        background: "#f8fafd",
      }}
      className="p-10 relative overflow-hidden"
    >
      <div className="w-96 h-96 bg-blue-500 opacity-10 blur-3xl absolute left-0 top-0 z-10"></div>
      <div className="w-96 h-96 bg-purple-500 opacity-10 blur-3xl absolute right-0 top-0 z-10"></div>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center z-50">
          <img
            src="https://avatars.githubusercontent.com/u/79016171?v=4"
            alt=""
            className="w-28 rounded-2xl"
          />
          <div className="ml-4">
            <p className="vartaBold text-3xl">{personalDetail[0]?.firstName + " " + personalDetail[0]?.lastName}</p>
            <p className="vartaSemiBold">{personalDetail[0]?.jobTitle}</p>
          </div>
        </div>
        <div>
          
              <p className="text-slate-400 mt-1 vartaRegular">
                {personalDetail[0]?.email}
              </p>
              <p className="text-slate-400 mt-1 vartaRegular">
                {personalDetail[0]?.country}
              </p>
              <p className="text-slate-400 mt-1 vartaRegular">
                {personalDetail[0]?.phone}
              </p>
            
        </div>
      </div>
      <p className="vartaSemiBold mt-8 text-slate-600">
        {personalDetail[0]?.profile}
      </p>

      <div className="mt-8">
        <p className={clsx("vartaBold text-slate-400", experiences.length ? "block" : "hidden")}>Experince</p>
        {experiences.map((item : any) => {
          return (
            <div className="mb-6">
              <p className="vartaSemiBold text-lg text-slate-700">
                • {item.jobTitle}
              </p>
              <p className="vartaLight text-slate-400">
                {item.startDate} - {item.endDate}
              </p>
              <p className="vartaSemiBold text-sm mt-2 text-slate-700">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
      <div className="mt-8">
        <p className="vartaBold text-slate-400">Projects</p>
        {projects.map((item : any) => {
          return (
            <div className="mb-6">
              <p className="vartaSemiBold text-lg text-slate-700">
                {item.projectSubject}
              </p>
              <p className="text-sm mt-2 text-slate-700 vartaSemiBold">
                {item.desc}
              </p>
              <p className="text-sm mt-2 text-slate-700 vartaSemiBold flex">
                {/* {item.links.map((item) => {
                  return (
                    <div className="mr-2 flex items-center text-slate-400">
                      <a
                        className="mr-1 underline"
                        key={item.id}
                        href={item.link}
                        target="blank"
                      >
                        {item.title}
                      </a>
                      <HiArrowNarrowRight />
                    </div>
                  )
                })} */}
              </p>
            </div>
          )
        })}
      </div>
      <div className="mt-8">
        <p className="vartaBold text-slate-400">Skills</p>
        <div className="flex flex-wrap">
          {skills.map((item : any) => {
            return (
              <p
                key={item.skill}
                className="vartaSemiBold text-md text-slate-600 mr-6 mb-2"
              >
                {`// `}
                {item.skill}
              </p>
            )
          })}
        </div>
      </div>
      {/* <div className="mt-8">
        <p className="vartaBold text-slate-400">Languages</p>
        <div className="flex flex-wrap">
          {LangItems.map((item) => {
            return (
              <p className="vartaSemiBold text-md text-slate-600 mr-6 mb-2">
                {`// `}
                {item.name}
              </p>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default TemplateOne
