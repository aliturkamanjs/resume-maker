import exampleTemplate from "../svg/exampleTemplate.svg";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-evenly border-b-2 border-slate-500">
      <div className="text-center flex flex-col items-center mt-8">
        <p className="tracking-widest text-lg text-slate-400">
          Free resume maker
        </p>
        <h1 className="text-center mx-auto font-medium text-3xl text-gray-800 mt-4">
          <p>Only 2% of resumes make it past the first round</p>
          <p>Be in the top 2%</p>
        </h1>
        <p className=" text-slate-400 text-lg mt-2">
          Use professionally tested resume templates
        </p>
        <button className="w-40 h-11 font-medium bg-blue-500 text-white rounded-md mt-8 hover:bg-white border-2 border-blue-500 delay-150 duration-300 ease-in-out hover:text-blue-500">
          Create Resume
        </button>
      </div>
      <div className="mt-12">
        <img
          src={exampleTemplate}
          className="w-8/12 mx-auto border-x-2 border-t-2 border-slate-500 rounded-3xl rounded-b-none"
          alt=""
        />
      </div>
    </div>
  );
};
