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