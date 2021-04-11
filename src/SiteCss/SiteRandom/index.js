const SiteRandom = (props) => {
    return props.sort(() => .5 - Math.random())
}

export default SiteRandom