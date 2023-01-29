export const friendListApi = (user) => {
    return `http://13.112.13.61:5000/all-friends/of-user/${user}`;
}

export const postsOfUserWithFriendsApiUrl = (user) => {
    return `http://localhost:5000/post/get/${user}`;
} 

export const savePostApiUrl = () => {
    return "http://socialmediabackend-env.eba-m8ebkyni.ap-northeast-1.elasticbeanstalk.com/post/save";
}