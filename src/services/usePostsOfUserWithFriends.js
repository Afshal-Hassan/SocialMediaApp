import { postsOfUserWithFriendsApiUrl } from "../apis/apiUrls";
import { useState , useCallback } from "react";
import axios from "axios";


const usePostOfUserWithFriends = () => {

    const [posts , setPosts] = useState([]);

    const fetchPostsOfUserWithFriends = useCallback(async (user) => {
        const { data } = await axios.get(postsOfUserWithFriendsApiUrl(user));
        setPosts(data);
      }, [posts]);

  return [posts,fetchPostsOfUserWithFriends];
}

export default usePostOfUserWithFriends;