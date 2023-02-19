export const updateHeartButtonTouched = (data) => {
    return {
        type: "UPDATE_HEART_BUTTON_TOUCHED",
        data: data
    }
}

export const updateLikeButtonTouched = (data) => {
    return {
        type: "UPDATE_LIKE_BUTTON_TOUCHED",
        data: data
    }
}

export const resetButtonTouched = () => {
    return {
        type: "RESET_BUTTON_TOUCHED",
    }
}