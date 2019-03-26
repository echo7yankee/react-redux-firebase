const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project:", action.project);
      const newState = [...state.projects, { ...action.project }];
      console.log(newState);

      return newState;

    default:
      return state;
  }
};

export default projectReducer;
