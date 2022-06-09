import { Sticky } from "react-sticky"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import TemplateOne from "../templates/template1"
import { useSelector } from "react-redux"

export const ResultResume = (): JSX.Element => {
  const state = useSelector((state) => state)

  // console.log(state)

  return (
    <div className="w-5/6 h-screen">
      <Sticky>
        {({ style }) => (
          <div
            style={{ ...style, top: "0" }}
            className="h-screen flex items-center justify-center bg-dark relative"
          >
            <Link to="/">
              <span className="absolute right-5 top-5 bg-slate-100 text-dark p-1 text-2xl rounded-full">
                <IoClose />
              </span>
            </Link>
            <div
              style={{ width: "80%", height: "90%", overflowY: "scroll" }}
              className="overflow-hidden rounded-md"
            >
              <TemplateOne />
            </div>
          </div>
        )}
      </Sticky>
    </div>
  )
}
