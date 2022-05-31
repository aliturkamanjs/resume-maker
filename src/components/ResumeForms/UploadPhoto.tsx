import { FaUserAlt } from "react-icons/fa"

export const UploadPhoto = (): JSX.Element => {
  return (
    <div
      className="flex items-center justify-start pt-4"
      style={{ width: "46%" }}
    >
      <div className="cursor-pointer w-12 h-12 bg-slate-100 text-xl rounded-md text-slate-400 flex items-center justify-center">
        <FaUserAlt />
      </div>
      <p className="cursor-pointer text-xs px-3 text-blue-500">Upload Photo</p>
    </div>
  )
}
