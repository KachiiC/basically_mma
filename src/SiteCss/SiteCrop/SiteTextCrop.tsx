

const SiteTextCrop = (props: string, number: number) => {

    const limit_length = number + 3

    const cropped_text = props.split("").slice(0,number).join("") + "..."

    const propText = props.split("").length > limit_length ? cropped_text : props

    return propText

}  

export default SiteTextCrop