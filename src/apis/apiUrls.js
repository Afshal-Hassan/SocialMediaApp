export const friendListApi = (user) => {
    return `http://13.112.13.61:5000/all-friends/of-user/${user}`;
}

export const postsOfUserWithFriendsApiUrl = (user) => {
    return `http://localhost:5000/post/get/${user}`;
} 

export const savePostApiUrl = () => {
    return "http://localhost:5000/post/save";
}

export const fetchUserDetailsApiUrl = (clickedByUser,clickedOnUser) => {
    return `http://localhost:5000/user/get/${clickedByUser}/${clickedOnUser}`;
}

export const fetchRecommendedFriendSuggestionUrl = (user) => {
    return `http://65.1.112.53/${user}`;
} 

export const fetchRecommendedFriendsProfileData = (userEmail) => {
    return `http://localhost:5000/user/list/get/${userEmail}`
}

export const fetchNotificationsApiUrl = (userEmail) => {
    return `http://localhost:5000/notifications/get/${userEmail}`;
}

export const loginApiUrl = () => {
    return `http://localhost:5000/auth/login`;
}

export const privateRoomKeyApiUrl = (clickedByUser,clickedOnUser) => {
    return `http://13.112.13.61/private-room/key/${clickedByUser}/${clickedOnUser}`
}

export const friendsDataApiUrl = (userEmail) => {
    return `http://localhost:5000/friends/list/${userEmail}`
}

export const updateNotificationsApiUrl = (senderEmail,receiverEmail) => {
    return `http://localhost:5000/notifications/update/${senderEmail}/${receiverEmail}`;
}

export const saveNotificationsApiUrl = () => {
    return `http://localhost:5000/notifications/save`;
}