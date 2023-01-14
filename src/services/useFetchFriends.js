import { useState,useCallback } from "react"
import { friendListApi } from "../apis/apiUrls";
import axios from "axios";

const useFetchFriends = () => {
    const [friends , setFriends] = useState([]);

    const fetchFriendsOfUser = useCallback(async (user) => {
        const { data } = await axios.get(friendListApi(user));
        setFriends(data.data);
      }, [friends]);

  return [friends,fetchFriendsOfUser];
}

export default useFetchFriends;