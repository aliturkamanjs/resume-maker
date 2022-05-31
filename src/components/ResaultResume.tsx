import { Sticky } from "react-sticky"

export const ResaultResume = (): JSX.Element => {
  return (
    <div className="w-5/6 h-screen">
      <Sticky>{({ style }) => <div style={style} className="w-5/6 h-screen bg-dark"></div>}</Sticky>
    </div>
  )
}
