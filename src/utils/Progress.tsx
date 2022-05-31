interface propsType {
  range: number
  progressStatus: any
}

export const Progress = (props: propsType): JSX.Element => {
  const { range, progressStatus } = props

  return (
    <div className="w-full bg-slate-200 overflow-hidden rounded-lg">
      <div
        className={`${progressStatus.bg} block h-1 duration-150`}
        style={{ width: `${range}%` }}
      ></div>
    </div>
  )
}
