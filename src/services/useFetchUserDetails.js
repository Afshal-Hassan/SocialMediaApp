import axios from "axios";
import React,{ useCallback, useState } from "react"
import { fetchUserDetailsApiUrl } from "../apis/apiUrls";


const useFetchUserDetails = () => {
    const [ userDetails, setUserDetails] = useState();

    const fetchUserDetails = useCallback(async(clickedByUser,clickedOnUser) => {
            const { data } = await axios.get(fetchUserDetailsApiUrl(clickedByUser,clickedOnUser));
            setUserDetails(data);
    }, [userDetails]);

    return [ userDetails, fetchUserDetails ];
}

export default useFetchUserDetails;