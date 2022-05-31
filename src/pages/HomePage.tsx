import { Link } from "react-router-dom";
import image from "../images/headerimg.png";
import Layout from "../layout/layout";

export const HomePage = () => {
  return (
    <Layout>
      <div
        className="flex flex-col items-center w-full h-screen"
        style={{ background: "#D1D2F9" }}
      >
        <div className="flex flex-col items-center mt-12 text-center">
          <h1 className="text-center text-4xl font-bold text-indigo-900 leading-snug flex flex-col">
            Only 2% of resumes make it past the{" "}
            <span> first round Be in the top 2%</span>
          </h1>
          <p className="font-medium text-xl mt-6 text-indigo-900 flex flex-col">
            Use professional field-tested resume templates that follow the{" "}
            <span>exact ‘resume rules’ employers look for</span>
          </p>
          <Link to="/build">
            <button className="w-36 h-11 mt-6 text-sm rounded-full font-medium duration-150 text-white bg-indigo-600 border-2 border-indigo-600 hover:bg-transparent hover:text-indigo-600">
              Create Resume
            </button>
          </Link>
        </div>
        <div className="mt-10 w-3/6">
          <img src={image} alt="" />
        </div>
      </div>
    </Layout>
  );
};
