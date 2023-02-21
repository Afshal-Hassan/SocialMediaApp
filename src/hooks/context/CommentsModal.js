import { createContext, useContext, useState } from "react";


const CommentsModalContext = createContext(undefined);

export const CommentsModalProvider = ( { children } ) => {

    const[openCommentsModal, setOpenCommentsModal] = useState();


    return <CommentsModalContext.Provider value={[openCommentsModal,setOpenCommentsModal]}>{children}</CommentsModalContext.Provider>
}

export const useCommentsModal = () => useContext(CommentsModalContext);