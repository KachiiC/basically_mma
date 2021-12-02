// COMPONENTS
import SiteCards from 'Components/SiteComponents/SiteCards'
// CSS
import './Test.css'
// import TestComponent from './component/TestComponent'
// DATA
// TOOLS

// URLS

const data = [
    {
        title: "title",
        type: "type",
        description: "At first, it appeared that the suspension could be temporary and Jones would return to the gym after his legal and personal issues sorted out. In the meantime, Jones has been training at Jackson’s affiliate gym Jackson’s MMA Acoma and at Fight Ready MMA. Jones indicated that he would not return to the gym that was his home through his dominate title reign.",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_24.png",
        icon: "python"
    },
    {
        title: "title",
        type: "type",
        description: "At first, it appeared that the suspension could be temporary and Jones would return to the gym after his legal and personal issues sorted out. In the meantime, Jones has been training at Jackson’s affiliate gym Jackson’s MMA Acoma and at Fight Ready MMA. Jones indicated that he would not return to the gym that was his home through his dominate title reign.",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_24.png",
        icon: "python"
    },
    {
        title: "title",
        type: "type",
        description: "At first, it appeared that the suspension could be temporary and Jones would return to the gym after his legal and personal issues sorted out. In the meantime, Jones has been training at Jackson’s affiliate gym Jackson’s MMA Acoma and at Fight Ready MMA. Jones indicated that he would not return to the gym that was his home through his dominate title reign.",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_24.png",
        icon: "python"
    },
    {
        title: "title",
        type: "type",
        description: "At first, it appeared that the suspension could be temporary and Jones would return to the gym after his legal and personal issues sorted out. In the meantime, Jones has been training at Jackson’s affiliate gym Jackson’s MMA Acoma and at Fight Ready MMA. Jones indicated that he would not return to the gym that was his home through his dominate title reign.",
        image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_24.png",
        icon: "python"
    },
]

const Test = () => {

    return (
        <SiteCards 
            data={data} 
            card_size="medium" 
            type="icons"
        />
    )
}

export default Test