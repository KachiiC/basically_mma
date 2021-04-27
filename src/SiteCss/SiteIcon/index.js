import React from 'react'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//// Icons List ////
// Font Awesome Icons
import { 
    faArrowCircleLeft, 
    faArrowCircleRight,
    faBars,
    faPlay,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
// Font Awesome BrandIcons
import { 
    faInstagram, 
    faReadme 
} from '@fortawesome/free-brands-svg-icons'


const SiteIcon = (props) => {

    // Set up varriable
    var icon
    // Switch set up
    switch (props.icon) {

        case "play":
            icon = faPlay
            break;
        case "read":
            icon = faBars 
            break;
        case "instagram":
            icon = faInstagram;
            break;
        case "circle-left":
            icon = faArrowCircleLeft
            break;
        case "circle-right":
            icon = faArrowCircleRight
            break;
        case "bars":
            icon = faBars 
            break;
        case "shopping-cart": 
            icon = faShoppingCart
            break
        default:
            icon = faReadme
    }
    // Set up varriable
    var size
    // Edit size to applicable
    switch (props.size) {

        case "xs":
            size = "xs"
            break
        case "sm":
            size = "sm"
            break
        case "lg":
            size = "lg"
            break
        case 2:
            size = `${2}x`
            break
        case 3:
            size = `${3}x`
            break
        case 4:
            size = `${4}x`
            break
        case 5:
            size = `${5}x`
            break
        case 6:
            size = `${6}x`
            break
        case 7:
            size = `${7}x`
            break
        case 8:
            size = `${8}x`
            break
        case 9:
            size = `${9}x`
            break
        case 10:
            size = `${10}x`
            break
        default: 
            size = "2x"       
    }

    // default color is black
    const colorLogic = props.color ? props.color: "black"

    // add style logic from css if applicable
    const styleLogic = () => {
        if (props.style) {
            return props.style
        }
    }
    
    return (
        <FontAwesomeIcon 
            onClick={props.onClick}
            icon={icon} 
            size={size} 
            color={colorLogic}
            className={`cursor-pointer ${styleLogic()}`}
        />
    )

}
    

export default SiteIcon