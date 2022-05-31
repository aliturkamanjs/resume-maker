import { useEffect, useRef, useState } from "react"

import { Progress } from "../../utils/Progress"
import { Forms } from "./Forms"

import { Sticky } from "react-sticky"

interface ProgressStatusType {
  text: string
  bg: string
}

export const ResumeForm = (): JSX.Element => {
  const [range, setRange] = useState<number>(80)
  const [progressOffSetTop, setProgressOffSetTop] = useState<number>()
  const [progressStatus, setProgressStatus] = useState<ProgressStatusType>({
    text: "",
    bg: "",
  })
  const ProgressRef = useRef<any>(null)

  useEffect(() => {
    if (ProgressRef.current) {
      setProgressOffSetTop(ProgressRef.current?.offsetTop)
    }
  }, [])

  useEffect(() => {
    if (range <= 30) {
      setProgressStatus({
        text: "text-red-500",
        bg: "bg-red-500",
      })
    } else if (range >= 30 && range <= 60) {
      setProgressStatus({
        text: "text-yellow-500",
        bg: "bg-yellow-500",
      })
    } else if (range >= 60 && range <= 100) {
      setProgressStatus({
        text: "text-green-500",
        bg: "bg-green-500",
      })
    }
  }, [range])

  return (
    <div className="w-5/6 min-h-screen bg-white pt-10 overflow-hidden">
      <div className="px-14 pb-7">
        <h1
          className="text-center text-3xl text-slate-800 outline-none"
          contentEditable="true"
        >
          Untitled
        </h1>
        <div className="text-center">
          <p className="text-sm text-slate-600">🇺🇸 English</p>
        </div>
        <div ref={ProgressRef}>
          <Sticky topOffset={progressOffSetTop}>
            {({ style }) => (
              <div className=" bg-white py-5" style={{ ...style, top: "0px" }}>
                <div className="flex items-center text-xs mb-2">
                  <span className={`block mr-1 ${progressStatus.text}`}>
                    {range}%
                  </span>{" "}
                  <p className="text-slate-400">Profile completeness</p>
                </div>

                <Progress range={range} progressStatus={progressStatus} />
              </div>
            )}
          </Sticky>
        </div>

        <Forms />
      </div>
    </div>
  )
}
