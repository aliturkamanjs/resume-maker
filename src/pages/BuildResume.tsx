import { ResultResume } from "../components/ResultResume"
import { ResumeForm } from "../components/ResumeForms/ResumeForm"

export const BuildResumePage = () => {
  return (
    <div className="max-w-screen  min-h-screen flex">
      <ResumeForm />
      <ResultResume />
    </div>
  )
}
