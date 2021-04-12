import React,{useState} from 'react'
import SiteModal from ''

const [displayModal, setDisplayModal] = useState(false)

const showModal = (props) => {
    
    const handleModal = displayModal === false ? setDisplayModal(true) : setDisplayModal(false)

    return <>
        { displayModal && (
            <SiteModal closeModal={handleModal}>
                {props.children}
            </SiteModal>
        )}
        </>
}

export default showModal