export const incrementNotifications = () => {
    return {
        type: "INCREMENT_NOTIFICATIONS"
    }
}

export const sendNotificationMessage = (data) => {
    return {
        type: "NOTIFICATION_MESSAGE",
        data: data
    }
}