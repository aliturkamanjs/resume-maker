import { useState } from "react"

import clsx from "clsx"

import { Input } from "../../utils/input"
import { UploadPhoto } from "./UploadPhoto"

import {
  initialPersonalDetailsValues,
  initialExpValues,
  initialEduValues,
  initailProjValues,
  initialLinksValue,
  initialSkillValue,
} from "./initialValue"
import {
  EDUCATIONS,
  LINKS,
  PERSONAL_DETAILS,
  PROJECTS,
  SKILLS,
  WORK_EXPERIENCES,
} from "../../redux/types"

import { FiChevronDown } from "react-icons/fi"
import { AdditionalDetails } from "./AdditionalDetails"
import { AdditionalItems } from "../../utils/AdditionalItems/AdditionalItems"
import { Modal } from "../../utils/Modal/Modal"
import { Formik } from "formik"
import { useDispatch } from "react-redux"


export const Forms = (): JSX.Element => {
  const dispatch = useDispatch()

  const [showMoreDetail, setShowMoreDetails] = useState<boolean>(false)
  const [isOpenExperiences, setIsOpenExperiences] = useState<boolean>(false)
  const [isOpenEducation, setIsOpenEducation] = useState<boolean>(false)
  const [isOpenProjects, setIsOpenProjects] = useState<boolean>(false)
  const [isOpenLinks, setIsOpenLinks] = useState<boolean>(false)
  const [isOpenSkills, setIsOpenSkills] = useState<boolean>(false)

  const [skills, setSkills] = useState([])

  return (
    <div>
      <h1 className="text-base text-slate-800 mb-6">Personal Details</h1>
      <Formik
        initialValues={initialPersonalDetailsValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, submitForm }) => (
          <form
            onChange={(e) => {
              handleChange(e)
              setTimeout(() => {
                submitForm()
                dispatch({ type: PERSONAL_DETAILS, payload: values })
              }, 1500)
            }}
          >
            <div className="flex w-full justify-between">
              <Input
                title="Job Title"
                type="text"
                name="jobTitle"
                value={values.jobTitle}
                placeholder="e.g. Frontend developer"
                width="47"
              />
              <UploadPhoto />
            </div>
            <div className="flex w-full justify-between mt-8">
              <Input
                title="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                placeholder="your first name"
                width="47"
              />
              <Input
                title="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                placeholder="your first name"
                width="47"
                tooltipTitle="this is tooltip title for tou and this is exaample"
              />
            </div>
            <div className="flex w-full justify-between mt-8">
              <Input
                title="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="example@company.com"
                width="47"
              />
              <Input
                title="Phone"
                type="tel"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                placeholder="your first name"
                width="47"
              />
            </div>
            {showMoreDetail ? (
              <AdditionalDetails onChange={handleChange} values={values} />
            ) : null}
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
                Write 2-4 short & energetic sentences to interest the reader!
                Mention your role, experience & most importantly - your biggest
                achievements, best qualities and skills.
              </p>
              <textarea
                className="bg-slate-100 my-5 w-full resize-none outline-none shadow-sm rounded-md p-3 text-sm"
                placeholder="e.g. Front developer with more than 8 years of experience..."
                name="profile"
                id=""
                onChange={handleChange}
                value={values.profile}
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </form>
        )}
      </Formik>

      <Formik
        initialValues={initialExpValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <AdditionalItems
              title="Work Experiences"
              desc="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
              btnTitle="Add experience"
              handleClick={() => setIsOpenExperiences(true)}
            />
            <Modal
              title="Add experiences"
              closeModal={() => setIsOpenExperiences(false)}
              isOpen={isOpenExperiences}
              children={
                <>
                  <div className="flex w-full justify-between my-7">
                    <Input
                      title="Job title"
                      type="text"
                      name="jobTitle"
                      onChange={handleChange}
                      value={values.jobTitle}
                      placeholder=""
                      width="47"
                    />
                    <Input
                      title="Company"
                      type="text"
                      name="company"
                      onChange={handleChange}
                      value={values.company}
                      placeholder=""
                      width="47"
                    />
                  </div>
                  <div className="flex w-full justify-between my-7">
                    <div
                      className="flex w-full justify-between items-end"
                      style={{ width: "47%" }}
                    >
                      <Input
                        title="Start & End Date"
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        value={values.startDate}
                        placeholder=""
                        width="47"
                      />
                      <Input
                        title=""
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={values.endDate}
                        placeholder=""
                        width="47"
                      />
                    </div>
                    <Input
                      title="City"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={values.city}
                      placeholder=""
                      width="47"
                    />
                  </div>
                  <p className="text-xs mb-2 text-slate-500">Description</p>
                  <textarea
                    className="w-full bg-slate-100 mb-3 outline-none shadow-sm p-3 h-32 resize-none rounded-md text-sm"
                    placeholder="e.g. Graduated with High Honors."
                    name="desc"
                    id=""
                    onChange={handleChange}
                    value={values.desc}
                    cols={30}
                    rows={10}
                  ></textarea>
                </>
              }
              saveChange={() => {
                handleSubmit()
                dispatch({ type: WORK_EXPERIENCES, payload: values })
              }}
            />
          </>
        )}
      </Formik>

      <Formik
        initialValues={initialEduValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <AdditionalItems
              title="Education"
              desc="A varied education on your resume sums up the value that your learnings and background will bring to job."
              btnTitle="Add education"
              handleClick={() => setIsOpenLinks(true)}
            />
            <Modal
              title="Add education"
              closeModal={() => setIsOpenLinks(false)}
              isOpen={isOpenLinks}
              children={
                <>
                  <div className="flex w-full justify-between my-7">
                    <Input
                      title="School"
                      type="text"
                      name="school"
                      onChange={handleChange}
                      value={values.school}
                      placeholder=""
                      width="47"
                    />
                    <Input
                      title="Degree"
                      type="text"
                      name="degree"
                      onChange={handleChange}
                      value={values.degree}
                      placeholder=""
                      width="47"
                    />
                  </div>
                  <div className="flex w-full justify-between my-7">
                    <div
                      className="flex w-full justify-between items-end"
                      style={{ width: "47%" }}
                    >
                      <Input
                        title="Start & End Date"
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        value={values.startDate}
                        placeholder=""
                        width="47"
                      />
                      <Input
                        title=""
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={values.endDate}
                        placeholder=""
                        width="47"
                      />
                    </div>
                    <Input
                      title="City"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={values.city}
                      placeholder=""
                      width="47"
                    />
                  </div>
                  <p className="text-xs mb-2 text-slate-500">Description</p>
                  <textarea
                    className="w-full bg-slate-100 mb-3 outline-none shadow-sm p-3 h-32 resize-none rounded-md text-sm"
                    placeholder="e.g. Graduated with High Honors."
                    name="desc"
                    id=""
                    onChange={handleChange}
                    value={values.desc}
                    cols={30}
                    rows={10}
                  ></textarea>
                </>
              }
              saveChange={() => {
                handleSubmit()
                dispatch({ type: EDUCATIONS, payload: values })
              }}
            />
          </>
        )}
      </Formik>

      <Formik
        initialValues={initailProjValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <AdditionalItems
              title="Projects"
              desc="You can add projects you wnat hiring managers to see! "
              btnTitle="Add project"
              handleClick={() => setIsOpenProjects(true)}
            />
            <Modal
              title="Add projects"
              closeModal={() => setIsOpenProjects(false)}
              isOpen={isOpenProjects}
              children={
                <>
                  <div className="flex w-full justify-between my-7">
                    <Input
                      title="project subject"
                      type="text"
                      name="projectSubject"
                      onChange={handleChange}
                      value={values.projectSubject}
                      placeholder=""
                      width="100"
                    />
                  </div>
                  <div className="flex w-full justify-between my-7">
                    <div
                      className="flex w-full justify-between items-end"
                      style={{ width: "100%" }}
                    >
                      <Input
                        title="Start & End Date"
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                        value={values.startDate}
                        placeholder=""
                        width="47"
                      />
                      <Input
                        title=""
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                        value={values.endDate}
                        placeholder=""
                        width="47"
                      />
                    </div>
                  </div>
                  <p className="text-xs mb-2 text-slate-500">Description</p>
                  <textarea
                    className="w-full bg-slate-100 mb-3 outline-none shadow-sm p-3 h-32 resize-none rounded-md text-sm"
                    placeholder="e.g. Graduated with High Honors."
                    name="desc"
                    id=""
                    onChange={handleChange}
                    value={values.desc}
                    cols={30}
                    rows={10}
                  ></textarea>
                </>
              }
              saveChange={() => {
                handleSubmit()
                dispatch({ type: PROJECTS, payload: values })
              }}
            />
          </>
        )}
      </Formik>

      <Formik
        initialValues={initialLinksValue}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <AdditionalItems
              title="Websites & Social Links"
              desc="You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website"
              btnTitle="Add link"
              handleClick={() => setIsOpenEducation(true)}
            />
            <Modal
              title="Add Websites & Social Links"
              closeModal={() => setIsOpenEducation(false)}
              isOpen={isOpenEducation}
              children={
                <>
                  <div className="flex w-full justify-between my-7">
                    <Input
                      title="Label"
                      type="text"
                      name="label"
                      onChange={handleChange}
                      value={values.label}
                      placeholder=""
                      width="47"
                    />
                    <Input
                      title="Link"
                      type="link"
                      name="link"
                      onChange={handleChange}
                      value={values.link}
                      placeholder=""
                      width="47"
                    />
                  </div>
                </>
              }
              saveChange={() => {
                handleSubmit()
                dispatch({ type: LINKS, payload: values })
              }}
            />
          </>
        )}
      </Formik>

      <Formik
        initialValues={initialSkillValue}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <AdditionalItems
              title="Skills"
              desc="Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system."
              btnTitle="Add skills"
              handleClick={() => setIsOpenSkills(true)}
            />
            <Modal
              title="Add skills"
              closeModal={() => setIsOpenSkills(false)}
              isOpen={isOpenSkills}
              children={
                <>
                  <div className="flex w-full justify-between my-7">
                    <Input
                      title="skill"
                      type="text"
                      name="skill"
                      onChange={handleChange}
                      value={values.skill}
                      placeholder=""
                      width="100"
                    />
                  </div>
                </>
              }
              saveChange={() => {
                handleSubmit()
                dispatch({ type: SKILLS, payload: values })
              }}
            />
          </>
        )}
      </Formik>
    </div>
  )
}
