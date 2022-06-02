import { BsDot } from "react-icons/bs";

function TemplateThree() {
  const SkillsItems = [
    { name: "Project managment", id: 1 },
    { name: "Development", id: 2 },
    { name: "Leadership", id: 3 },
    { name: "Strategy", id: 3 },
  ];

  const LangItems = [
    { name: "English", id: 1 },
    { name: "French", id: 2 },
    { name: "Italian", id: 3 },
  ];

  return (
    <div
      style={{
        width: "800px",
        height: "1100px",
        background: "#FAF9F5",
      }}
      className="p-10 overflow-hidden border"
    >
      <p className="urbanistBlack text-5xl -ml-2">
        <p>COOPER</p> <p className="mt-2">WORKMAN</p>
      </p>
      <p className="mt-3 urbanistMedium" style={{ color: "#9E9085" }}>
        Product manager
      </p>
      <div className="border mt-2"></div>
      <div className="flex">
        <div className="w-2/5 border-r pt-3">
          <div>
            <div>
              <p className="urbanistBold text-2xl">DETAILS</p>
              <div
                className="w-8 border rounded-full"
                style={{ borderColor: "#BABABA" }}
              ></div>
            </div>
            <div className="mt-4">
              <p className="syncopateBold text-sm">Address</p>
              <p
                className="text-xs urbanistMedium"
                style={{ color: "#A89E97" }}
              >
                NYC, United state
              </p>
            </div>
            <div className="mt-4">
              <p className="syncopateBold text-sm">Phone</p>
              <p
                className="text-xs urbanistMedium"
                style={{ color: "#A89E97" }}
              >
                (512) 465-6312
              </p>
            </div>
            <div className="mt-4">
              <p className="syncopateBold text-sm">Email</p>
              <p
                className="text-xs urbanistMedium"
                style={{ color: "#A89E97" }}
              >
                example@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-7">
            <div>
              <p className="urbanistBold text-2xl">SKILLS</p>
              <div
                className="w-8 border rounded-full"
                style={{ borderColor: "#BABABA" }}
              ></div>
            </div>
            {SkillsItems.map((item) => {
              return (
                <div className="mt-2" key={item.id}>
                  <p className="text-sm urbanistSemiBold flex items-center">
                    <BsDot
                      style={{ color: "#A89E97", fontSize: "20px" }}
                      className="-ml-2"
                    />{" "}
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7">
            <div>
              <p className="urbanistBold text-2xl">LANGUAGES</p>
              <div
                className="w-8 border rounded-full"
                style={{ borderColor: "#BABABA" }}
              ></div>
            </div>
            {LangItems.map((item) => {
              return (
                <div className="mt-2" key={item.id}>
                  <p className="text-sm urbanistSemiBold flex items-center">
                    <BsDot
                      style={{ color: "#A89E97", fontSize: "20px" }}
                      className="-ml-2"
                    />{" "}
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7">
            <div>
              <p className="urbanistBold text-2xl">EDUCATION</p>
              <div
                className="w-8 border rounded-full"
                style={{ borderColor: "#BABABA" }}
              ></div>
            </div>
            <div className="mt-3">
              <p className="urbanistSemiBold">Harvard University</p>
              <p className="urbanistSemiBold" style={{ color: "#A89E97" }}>Aug 2001 - Jun 2004</p>
            </div>
          </div>
        </div>
        <div className="w-5/6 pl-2">main</div>
      </div>
    </div>
  );
}

export default TemplateThree;
