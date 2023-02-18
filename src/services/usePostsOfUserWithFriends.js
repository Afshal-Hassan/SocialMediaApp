import { postsOfUserWithFriendsApiUrl } from "../apis/apiUrls";
import { useCallback } from "react";
import axios from "axios";
import { usePost } from '../hooks/context/PostContext';
import { useLoader } from "../hooks/context/LoadingContext";

const usePostOfUserWithFriends = () => {

  const { value } = usePost();
  const [ posts, setPosts] = value;
  const [ loading, setLoading] = useLoader();

  const email = localStorage.getItem("email");

    const fetchPostsOfUserWithFriends = useCallback(async (user) => {
        setLoading(true);
        const { data } = await axios.get(postsOfUserWithFriendsApiUrl(email));
        setPosts(data);
        if(data.length > 0){

          setLoading(false);
        }
        
      }, [posts]);

  return [fetchPostsOfUserWithFriends];
}

export default usePostOfUserWithFriends;