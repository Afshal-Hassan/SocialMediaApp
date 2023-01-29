import { createContext, useContext, useState } from "react";

const PostContext = createContext(undefined);

export const PostProvider = ({children}) => {

    const[posts,setPosts] = useState([]);

    return <PostContext.Provider  value={{value:[posts,setPosts]}}>{children}</PostContext.Provider>

};

export const usePost = () => useContext(PostContext);