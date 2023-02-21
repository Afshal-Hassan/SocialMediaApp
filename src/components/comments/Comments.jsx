import React, { memo } from 'react'
import { useCommentsModal } from '../../hooks/context/CommentsModal';

function Comments() {

    const[openCommentsModal, setOpenCommentsModal] = useCommentsModal();

    
    
    const handleOpenModal = (event) => {
        setOpenCommentsModal(true);
    }


  return (
  
        <div 
        id='com-modal-cont'
        style =
        {{
            color:"#65676b",
            fontWeight:600,
            cursor:"pointer"
        }}
        onClick={(event) => handleOpenModal(event)}
        >
             Comments
            </div>
   
  )
}

export default memo(Comments);