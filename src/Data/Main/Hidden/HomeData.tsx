import HomeImages from 'Data/Images/Home'

const {
    HistoryOfMMA,
    JRE,
    MMATechniques,
    MMADictionary,
    RulesOfMMA,
    WhatIsMMA
} = HomeImages

const HomeData = [
    {
        description: "What is MMA?",
        image: WhatIsMMA,
        link: "introduction",
        title: "What Is MMA?"
    },
    {
        description: "A brief History of MMA",
        image: HistoryOfMMA,
        link: "history",
        title: "History of MMA"
    },
    {
        description: "What techniques are there in MMA?",
        image: MMATechniques,
        link: "techniques",
        title: "Techniques in MMA"
    },
    {
        description: "Terms that a common in MMA",
        image: MMADictionary,
        link: "dictionary",
        title: "Dictionary"
    },
    {
        description: "What are the rules?",
        image: RulesOfMMA,
        link: "rules",
        title: "Rules Of MMA"
    },
    {
        description: "What are the best resources to learn about MMA?",
        image: JRE,
        link: "recommended",
        title: "Recommended"
    }
]

export default HomeData