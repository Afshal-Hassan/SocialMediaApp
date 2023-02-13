import { fetchRecommendedFriendSuggestionUrl } from "../apis/apiUrls"

export const recommendationOfFriendSuggestion = (user) => {
    fetch(fetchRecommendedFriendSuggestionUrl(user),{ mode: 'no-cors' })
    .then(res => res.json())
    .then(data =>{ 
        console.log(data)
    }
    );
}