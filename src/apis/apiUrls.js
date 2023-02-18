export const friendListApi = (user) => {
    return `http://13.112.13.61:5000/all-friends/of-user/${user}`;
}

export const postsOfUserWithFriendsApiUrl = (user) => {
    return `http://13.234.15.230/post/get/${user}`;
} 

export const savePostApiUrl = () => {
    return "http://13.234.15.230/post/save";
}

export const fetchUserDetailsApiUrl = (clickedByUser,clickedOnUser) => {
    return `http://13.234.15.230/user/get/${clickedByUser}/${clickedOnUser}`;
}

export const fetchRecommendedFriendSuggestionUrl = (user) => {
    return `http://65.1.112.53/${user}`;
} 

export const fetchRecommendedFriendsProfileData = (userEmail) => {
    return `http://13.234.15.230/user/list/get/${userEmail}`
}

export const fetchNotificationsApiUrl = (userEmail) => {
    return `http://13.234.15.230/notifications/get/${userEmail}`;
}

export const loginApiUrl = () => {
    return `http://13.234.15.230/auth/login`;
}

export const privateRoomKeyApiUrl = (clickedByUser,clickedOnUser) => {
    return `http://13.112.13.61/private-room/key/${clickedByUser}/${clickedOnUser}`
}

export const updateUserDetailsApiUrl = () => {
    return `http://13.234.15.230/user/update`;
}

export const friendsDataApiUrl = (userEmail) => {
    return `http://13.234.15.230/friends/list/${userEmail}`
}

export const updateNotificationsApiUrl = (senderEmail,receiverEmail) => {
    return `http://13.234.15.230/notifications/update/${senderEmail}/${receiverEmail}`;
}

export const saveNotificationsApiUrl = () => {
    return `http://13.234.15.230/notifications/save`;
}

export const allPrivateRoomsKeyOfUser = (email) => {
    return `http://13.234.15.230/private-rooms/list/${email}`;
}

export const updateLikes = (postId) => {
    return `http://13.234.15.230/post/update/likes/${postId}`
}


export const fetchFriendsApiUrl = (userEmail) => {
   return `http://13.234.15.230/friends/list/${userEmail}`;
}

export const checkUserExistsApiUrl = (userEmail) => {
    return `http://13.234.15.230/user/check/${userEmail}`;
}