import {useState} from 'react'

const [showModal, setShowModal] = useState(false)

const handleClick = showModal === false ? setShowModal(true) : setShowModal(false)

export default handleClick