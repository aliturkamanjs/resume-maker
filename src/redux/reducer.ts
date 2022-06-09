import { useState } from "react"

const initialState = {}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "PERSONAL_DETAILS":
      return { ...state }

    case "WORK_EXPERIENCES":
      return { ...state }

    case "EDUCATIONS":
      return { ...state }

    case "PROJECTS":
      return { ...state }

    case "LINKS":
      return { ...state }

    case "SKILLS":
      return { ...state }

    default:
      return state
  }
}
