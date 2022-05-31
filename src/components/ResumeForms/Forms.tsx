import { useState } from "react"

import clsx from "clsx"

import { Input } from "../../utils/input"
import { UploadPhoto } from "./UploadPhoto"

import { FiChevronDown } from "react-icons/fi"
import { AddisionalDetails } from "./AddisionalDetails"
import { AdditionalItems } from "../../utils/AdditionalItems/AdditionalItems"
import { Modal } from "../../utils/Modal/Modal"

export const Forms = (): JSX.Element => {
  const [showMoreDetail, setShowMoreDetails] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h1 className="text-base text-slate-800 mb-6">Personal Details</h1>
      <div className="flex w-full justify-between">
        <Input
          title="Job Title"
          type="text"
          placeholder="e.g. Frontend developer"
          width="47"
        />
        <UploadPhoto />
      </div>
      <div className="flex w-full justify-between mt-8">
        <Input
          title="First Name"
          type="text"
          placeholder="your first name"
          width="47"
        />
        <Input
          title="Last Name"
          type="text"
          placeholder="your first name"
          width="47"
          tooltipTitle="this is tooltip title for tou and this is exaample"
        />
      </div>
      <div className="flex w-full justify-between mt-8">
        <Input
          title="Email"
          type="email"
          placeholder="example@company.com"
          width="47"
        />
        <Input
          title="Phone"
          type="tel"
          placeholder="your first name"
          width="47"
        />
      </div>
      {showMoreDetail ? <AddisionalDetails /> : null}
      <div
        className="flex items-center text-sm mt-4 text-blue-500 cursor-pointer"
        onClick={() => setShowMoreDetails((prev) => !prev)}
      >
        <span className="mr-1 text-sm">
          {showMoreDetail
            ? "Hide additional details"
            : "Edit additional details "}
        </span>
        <FiChevronDown
          className={clsx("text-xl", showMoreDetail ? "rotate-180" : "")}
        />
      </div>

      <div className="mt-5">
        <h1 className="text-base text-slate-800 mb-1">About yourself</h1>
        <p className="text-xs text-slate-500">
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </p>
        <textarea
          className="bg-slate-100 my-5 w-full resize-none outline-none rounded-md p-3 text-sm"
          placeholder="e.g. Front developer with more than 8 years of experience..."
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <AdditionalItems
        title="Work Experiences"
        desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
        btnTitle="Add experience"
        handleClick={openModal}
      />
      <Modal
        title="Add experiences"
        closeModal={closeModal}
        isOpen={isOpen}
        modalWidth="2xl"
        children={
          <>
            <div className="flex w-full justify-between my-7">
              <Input title="Job title" type="text" placeholder="" width="47" />
              <Input title="Employer" type="text" placeholder="" width="47" />
            </div>
            <div className="flex w-full justify-between my-7">
              <div
                className="flex w-full justify-between items-end"
                style={{ width: "47%" }}
              >
                <Input
                  title="Start & End Date"
                  type="date"
                  placeholder=""
                  width="47"
                />
                <Input
                  title=""
                  type="date"
                  placeholder=""
                  width="47"
                />
              </div>
              <Input title="City" type="text" placeholder="" width="47" />
            </div>
          </>
        }
        saveChange={() => {
          console.log("save changed")
        }}
      />
    </div>
  )
}
