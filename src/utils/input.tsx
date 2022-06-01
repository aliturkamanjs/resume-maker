import clsx from "clsx"

import { BsQuestionCircle } from "react-icons/bs"
import { Tooltip } from "./tooltip"

interface inputTypes {
  title?: string
  type?: string
  placeholder?: string
  value?: string
  width?: string
  rest?: any
  tooltipTitle?: string
}

export const Input = (props: inputTypes): JSX.Element => {
  const { title, type, placeholder, width, value, tooltipTitle, ...rest } =
    props


  return (
    <div style={{ width: `${width}%` }}>
      <div className="flex items-center mb-2">
        <p className="text-xs mr-2 text-slate-500">{title}</p>
        <Tooltip
          message={tooltipTitle}
          children={
            <BsQuestionCircle
              className={clsx(
                "text-xs text-blue-500",
                tooltipTitle ? "block" : "hidden"
              )}
            />
          }
        />
      </div>
      <input
        className={clsx(
          `pl-3 py-1 w-full text-sm h-10 shadow-sm rounded-md bg-slate-100 text-slate-400 outline-none border transition border-slate-100 focus:border-blue-400`
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        name={title}
        {...rest}
      />
    </div>
  )
}
