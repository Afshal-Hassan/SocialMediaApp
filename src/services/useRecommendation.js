import axios from "axios";
import { useCallback, useEffect } from "react";
import { fetchRecommendedFriendSuggestionUrl } from "../apis/apiUrls";
import { useSuggestedFriends } from "../hooks/context/FriendsSuggestionContext";
import { fetchRecommendedFriendsProfileData } from "../apis/apiUrls";

const useRecommendation = () => {

    const [suggestedFriends, setSuggestedFriends] = useSuggestedFriends();
    const user="afshal";

    useEffect(() => {
        fetchRecommendedFriends(user);
    },[])

    const fetchRecommendedFriends = useCallback(async(user) => {

        const { data } = await axios.get(fetchRecommendedFriendSuggestionUrl(user));
        axios.post( fetchRecommendedFriendsProfileData() , data )
        .then( res => {

            setSuggestedFriends(res.data);
        })
        .catch(err => {

            console.log(err);
        })

    },[suggestedFriends])
    return [suggestedFriends];

}


export default useRecommendation;