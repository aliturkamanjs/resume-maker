import { HiArrowNarrowRight } from "react-icons/hi";

function TemplateOne() {
  const ContactItems = [
    { name: "Ali@gmail.com" },
    { name: "vancouver, BC" },
    { name: "(512) 465-6312" },
  ];

  const ExperinceItems = [
    {
      name: "software enginner at notion",
      fromTime: "october 2018",
      toTime: "may 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "fullstack developer at amazon",
      fromTime: "october 2015",
      toTime: "may 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const ProjectsItems = [
    {
      name: "The Pcode",
      links: [
        {
          title: "source link",
          id: 1,
          link: "https://github.com/The-Pcode/pcode",
        },
        { title: "website link", id: 2, link: "https://the-pcode.vercel.app/" },
      ],
      description:
        "Pcode lets you create and share beautiful images of your source code",
    },
  ];

  const SkillsItems = [
    { name: "python", id: 1 },
    { name: "javascript", id: 2 },
    { name: "angular", id: 3 },
    { name: "react", id: 4 },
    { name: "nodejs", id: 5 },
    { name: "mongodb", id: 6 },
    { name: "react native", id: 7 },
    { name: "deno", id: 8 },
  ];

  const LangItems = [
    { name: "English", id: 1 },
    { name: "Spanish", id: 2 },
    { name: "French", id: 3 },
  ];

  return (
    <div
      style={{ width: "800px", height: "1000px" }}
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
            <p className="vartaBold text-3xl">Ali Turkaman</p>
            <p className="vartaSemiBold">web developer</p>
          </div>
        </div>
        <div>
          {ContactItems.map((item) => {
            return (
              <p className="text-slate-400 mt-1 vartaRegular">{item.name}</p>
            );
          })}
        </div>
      </div>
      <p className="vartaSemiBold mt-8 text-slate-600">
        Hi i'm Ali, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>

      <div className="mt-8">
        <p className="vartaBold text-slate-400">Experince</p>
        {ExperinceItems.map((item) => {
          return (
            <div className="mb-6">
              <p className="vartaSemiBold text-lg text-slate-700">
                • {item.name}
              </p>
              <p className="vartaLight text-slate-400">
                {item.fromTime} - {item.toTime}
              </p>
              <p className="vartaSemiBold text-sm mt-2 text-slate-700">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <p className="vartaBold text-slate-400">Projects</p>
        {ProjectsItems.map((item) => {
          return (
            <div className="mb-6">
              <p className="vartaSemiBold text-lg text-slate-700">
                {item.name}
              </p>
              <p className="text-sm mt-2 text-slate-700 vartaSemiBold">
                {item.description}
              </p>
              <p className="text-sm mt-2 text-slate-700 vartaSemiBold flex">
                {item.links.map((item) => {
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
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <p className="vartaBold text-slate-400">Skills</p>
        <div className="flex flex-wrap">
          {SkillsItems.map((item) => {
            return (
              <p
                key={item.id}
                className="vartaSemiBold text-md text-slate-600 mr-6 mb-2"
              >
                {`// `}
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <p className="vartaBold text-slate-400">Languages</p>
        <div className="flex flex-wrap">
          {LangItems.map((item) => {
            return (
              <p className="vartaSemiBold text-md text-slate-600 mr-6 mb-2">
                {`// `}
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
