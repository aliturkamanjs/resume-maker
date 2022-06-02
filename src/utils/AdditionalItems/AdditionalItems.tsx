import { AiOutlinePlus } from "react-icons/ai"

interface propsType {
  title: String
  desc: String
  btnTitle: String
  handleClick: () => void
}

export const AdditionalItems = (props: propsType): JSX.Element => {
  const { title, desc, btnTitle, handleClick } = props

  return (
    <div className="mb-5">
      <h1 className="text-base text-slate-800">{title}</h1>
      <p className="text-xs text-slate-500 mt-1">{desc}</p>
      <div
        className="flex items-center text-xs mt-3 text-blue-500 cursor-pointer select-none"
        onClick={handleClick}
      >
        <AiOutlinePlus />
        <p className="ml-1">{btnTitle}</p>
      </div>
    </div>
  )
}
