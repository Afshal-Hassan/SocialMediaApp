export const incrementNotifications = () => {
    return {
        type: "INCREMENT_NOTIFICATIONS"
    }
}

export const setNotificationCountToZero = () => {

    return {
        type: "SET_NOTIFICATION_COUNT_TO_ZERO"
    }

}

export const resetNotificationsMessage = () => {
    return {
        type: "RESET_NOTIFICATIONS_MESSAGE"

    }
}

export const sendNotificationMessage = (data) => {

    return {
        type: "NOTIFICATION_MESSAGE",
        data: {
            notificationID: data.notificationID,
            notificationSenderName: data.notificationSenderName,
            notification: data.notification,
            notificationSenderProfilePic: data.notificationSenderProfilePic,
            notificationStatus: data.notificationStatus,
            notificationSenderEmail:data.notificationSenderEmail
        }
    }
}

export const updateNotificationMessage = (data) => {
    
    return {
        type: "UPDATE_NOTIFICATION_MESSAGE",
        data: {
            notificationID: data.notificationID,
            notificationSenderName: data.notificationSenderName,
            notification: data.notification,
            notificationSenderProfilePic: data.notificationSenderProfilePic,
            notificationStatus: data.notificationStatus,
            notificationSenderEmail:data.notificationSenderEmail
        }
    }
}