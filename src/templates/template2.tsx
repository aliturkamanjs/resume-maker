import vector from "../svg/Vectorbg.svg";
import TitleIcon from "../utils/TitleIcon";

function TemplateTwo() {
  function randomColorGenerator() {
    const randomColor = "#" + Math.floor(Math.random() * 12345678).toString(16);
    console.log(randomColor);
    return randomColor;
  }

  return (
    <div
      style={{
        width: "800px",
        height: "1100px",
        backgroundImage: `url(${vector})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="p-10 relative overflow-hidden border flex justify-center"
    >
      <div style={{ width: "600px", height: "auto" }}>
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="https://this-person-does-not-exist.com/img/avatar-bb089d07c353752bb8c8bfec4225cd51.jpg"
            alt=""
            className="w-32"
            style={{ borderRadius: "45px" }}
          />
          <p className="manjariBold text-3xl text-center mt-4">
            Matin Turkaman
          </p>
          <p className="text-gray-400 manjariRegular">Product Designer</p>
        </div>

        <div className="mt-7">
          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#CC3DFF" status="polygon" />
              <div className="border w-0 h-full border-purple-500"></div>
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Profile</p>
              <p className="manjariRegular text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                quae minima velit omnis, magnam officia error quos tempore culpa
                quibusdam ipsa aspernatur vitae repudiandae labore veritatis.
                Dolores in nostrum possimus!
              </p>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#3D73FF" status="polygon" />
              <div className="border w-0 h-full border-blue-500"></div>
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Contact</p>
              <div className="flex mt-2 h-auto">
                <TitleIcon fill="#FFC93D" status="circle" />
                <p className="manjariBold ml-2">United State</p>
              </div>
              <div className="flex mt-2 h-auto">
                <TitleIcon fill="#FF773D" status="circle" />
                <p className="manjariBold ml-2">(512) 465-6312</p>
              </div>
              <div className="flex mt-2 h-auto">
                <TitleIcon fill="#FF3D3D" status="circle" />
                <p className="manjariBold ml-2">example@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#FF3DB1" status="polygon" />
              <div className="border w-0 h-full border-blue-500"></div>
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Experience</p>
              <div className="mt-2">
                <p className="manjariBold">
                  Senior Prodct Designer at Figma
                </p>
                <p className="manjariRegular text-gray-400 text-sm">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin
                </p>
                <div className="flex mt-2">
                  <TitleIcon fill="#3D67FF" status="circle" />
                  <p className="manjariRegular ml-2 text-gray-400 text-sm">
                    May 4 2015
                  </p>
                </div>
                <div className="flex mt-2">
                  <TitleIcon fill="#3DD0FF" status="circle" />
                  <p className="manjariRegular ml-2 text-gray-400 text-sm">
                    Present
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#6F3DFF" status="polygon" />
              <div className="border w-0 h-full border-blue-500"></div>
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Projects</p>
              <div className="mt-2">
                <p className="manjariBold">Project Name</p>
                <p className="manjariRegular text-gray-400 text-sm">
                  always free from repetition, injected humour, or
                  non-characteristic words etc
                </p>
                <a
                  href="https://example.com/"
                  target="blank"
                  className="text-indigo-500 underline text-sm"
                >
                  # projectlink
                </a>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#3A99F1" status="polygon" />
              <div className="border w-0 h-full border-blue-500"></div>
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Languages</p>
              <div className="flex mt-2 h-auto">
                <TitleIcon fill={randomColorGenerator()} status="circle" />
                <p className="manjariBold ml-2">English</p>
              </div>
              <div className="flex mt-2 h-auto">
                <TitleIcon fill={randomColorGenerator()} status="circle" />
                <p className="manjariBold ml-2">French</p>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col items-center">
              <TitleIcon fill="#F1663A" status="polygon" />
            </div>
            <div className="ml-2 pb-5">
              <p className="manjariBold text-2xl">Education</p>
              <p className="manjariBold">Harvard University</p>
              <p className="manjariRegular text-gray-400">Aug 2012 - 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateTwo;
