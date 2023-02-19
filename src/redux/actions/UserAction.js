export const updateUserDetailsAction = (data) => {
    return {
        type: "UPDATE_USER_DETAILS",
        data: data
    }
}

export const resetUserDetailsAction = () => {
    return {
        type: "RESET_USER_DETAILS"
    }
}