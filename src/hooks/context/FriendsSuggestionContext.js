import { createContext, useContext, useState } from "react";


const FriendsSuggestionContext = createContext(null);

export const FriendsSuggestionProvider = ({children}) => {

    const [ suggestedFriends, setSuggestedFriends] = useState([]);

    return <FriendsSuggestionContext.Provider value={[suggestedFriends,setSuggestedFriends]}>{children}</FriendsSuggestionContext.Provider>
}

export const useSuggestedFriends = () => useContext(FriendsSuggestionContext);