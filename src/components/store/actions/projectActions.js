

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            // authorFirstName: profile.firstName,
            // authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: "CREATE_PROJECT", 
                project
            });
        }).catch((err) => {
            dispatch({
                type: "CREATE_PROJECT_ERROR",
                err
            })
        })
        
    }
};

export const deleteProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        // alert(Object.keys(project))
        firestore.collection('projects').doc(Object.keys(project)[0]).delete().then((doc) => {
            console.log("deleting...")
            dispatch({
                type: "DELETE_PROJECT", 
                project
            });
        }).catch((err) => {
            dispatch({
                type: "DELETE_PROJECT_ERROR",
                err
            })
        })
        
    }
};



export const updateCaption = (name, text) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to db
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('captions').doc(name).update({
            text: text,
        }).then(() => {
            dispatch({
                type: "UPDATE_CAPTION", 
                data: {name, text},
            });
        }).catch((err) => {
            dispatch({
                type: "CREATE_PROJECT_ERROR",
                err
            })
        })
        
    }
};