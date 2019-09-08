import $ from 'jquery'; 

export const UPDATE_USER = 'users: updateUser'; 
export const SHOW_ERROR = 'users: showError'; 

export const updateUser = (newUser) => {
    return {
        type: UPDATE_USER, 
        payload: {
            user: newUser 
        }
    }
}

export const showError = () => {
    return {
        type: SHOW_ERROR, 
        payload: {
            user: 'ERROR!!!'
        }
    }
}

export const apiRequest = () => {
    return dispatch => {
        dispatch(requestMade()); 

        $.ajax({
            url: 'http://google.com', 
            success() {
                console.log('SUCCESS'); 
                /*
                매개변수로 res 를 준다음 error와 같이 
                dispatch(updateUser(res.newUser)); 
                가능
                */
            },
            error() {
                console.log('ERROR'); 
                
                dispatch(showError()); 
            }
        })
    }
}