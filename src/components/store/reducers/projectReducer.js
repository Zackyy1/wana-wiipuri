

const initState = {
    projects: [
        {id:"1", title:"Hello boisss", content:"Yesterday, all my troubles seem so far away"},
        {id:"2", title:"Im a barbie girl", content:"All about that bass, bout that bass"},
        {id:"3", title:"Its never over", content:"Anakin! Its over, anakin! I have the high ground!"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Created project", action.project);
            return action.project;
        case 'DELETE_PROJECT':
            console.log("Deleted project", action.project);
            return action.project;
        case 'CREATE_PROJECT_ERROR':
            console.log("ERROR:", action.err);
            return state;
        default: 
            return state;
    }
    return state
}

export default projectReducer