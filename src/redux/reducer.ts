const initialState = {
  skills: [],
  links: [],
  projects: [],
  education: [],
  experiences: [],
  personalDetail: {},
}

export const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case "PERSONAL_DETAILS":
      return {
        ...state,
        personalDetail: [action.payload],
      }

    case "WORK_EXPERIENCES":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      }

    case "EDUCATIONS":
      return {
        ...state,
        education: [...state.education, action.payload],
      }

    case "PROJECTS":
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }

    case "LINKS":
      return { ...state, links: [...state.links, action.payload] }

    case "SKILLS":
      return { ...state, skills: [...state.skills, action.payload] }

    default:
      return state
  }
}
