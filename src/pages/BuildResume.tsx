import { ResaultResume } from "../components/ResaultResume"
import { ResumeForm } from "../components/ResumeForms/ResumeForm"

export const BuildResumePage = () => {
  return (
    <div className="max-w-screen-2xl min-h-screen flex">
      <ResumeForm />
      <ResaultResume />
    </div>
  )
}
