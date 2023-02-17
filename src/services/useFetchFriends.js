import { useState,useCallback } from "react"
import { fetchFriendsApiUrl } from "../apis/apiUrls";
import axios from "axios";

const useFetchFriends = () => {
    const [friends , setFriends] = useState([]);

    const fetchFriendsOfUser = useCallback(async (user) => {
      const { data } = await axios.get(fetchFriendsApiUrl(user));
      setFriends(data);
      }, [friends]);

  return [friends,fetchFriendsOfUser];
}

export default useFetchFriends;