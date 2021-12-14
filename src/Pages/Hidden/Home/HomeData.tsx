// IMAGES
import Advanced from 'Data/Images/Advanced'
import BasicHeaders from 'Data/Images/Basics'
import Recommended from 'Data/Images/MMAWorld/Recommended'

const {
    WhatIsMMAHeader,
    HistoryOfMMAHeader,
    RulesOfMMAHeader,
    MMADictionary
} = BasicHeaders

export const HomeData = [
    {
        image: WhatIsMMAHeader,
        title: "What is MMA?",
        link: "Introduction",
        description: "What is mixed martial art? Here is a good place to start."
    },
    {
        image: HistoryOfMMAHeader,
        title: "History of MMA",
        link: "history-of-mma",
        description: "Although has a short history, it is filled with historic moments. Here is a A brief history to help you understand the sport."
    },
    {
        image: RulesOfMMAHeader,
        title: "Rules of MMA",
        link: "Rules-of-mma",
        description: "Most people think MMA is no holds barred, in truth it isn't. Here are the rules!"
    },
    {
        image: MMADictionary,
        title: "Dictionary",
        link: "dictionary",
        description: "Ever heard of terms used by mma fans or during commentary and wonder what they mean? Here is a list of the common words."
    },
    {
        image: Advanced.MMATechniques,
        title: "Techniques",
        link: "techniques",
        description: "What are the most common techniques used in MMA? Check them out here."
    },
    {
        image: Recommended.JRE,
        title: "Recommended",
        link: "recommended",
        description: "What is the best way to keep up with the sport of MMA? Check out what we recommend."
    }
]