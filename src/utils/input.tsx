import clsx from "clsx";
import { ChangeEvent } from "react";

import { BsQuestionCircle } from "react-icons/bs";
import { Tooltip } from "./tooltip";

interface inputTypes {
  name?: string,
  title?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  width?: string;
  rest?: any;
  tooltipTitle?: string;
  onChange?: (e: ChangeEvent<any>) => void;
}

export const Input = (props: inputTypes): JSX.Element => {
  const {
    name,
    title,
    type,
    placeholder,
    width,
    value,
    tooltipTitle,
    onChange,
    ...rest
  } = props;

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
        name={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
