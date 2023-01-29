import { postsOfUserWithFriendsApiUrl } from "../apis/apiUrls";
import { useCallback } from "react";
import axios from "axios";
import { usePost } from '../hooks/context/PostContext';

const usePostOfUserWithFriends = () => {

  const { value } = usePost();
  const [ posts, setPosts] = value;

    const fetchPostsOfUserWithFriends = useCallback(async (user) => {
        const { data } = await axios.get(postsOfUserWithFriendsApiUrl(user));
        setPosts(data);
      }, [posts]);

  return [fetchPostsOfUserWithFriends];
}

export default usePostOfUserWithFriends;