import Recommended from "Images/MMAWorld/Recommended";

const {
    AnikAndFlorian,
    BellatorLogo,
    ESPN_MMA,
    JRE,
    MMA_Digest,
    MMA_Fighting,
    MMA_Hour,
    MMA_Junkie,
    OneLogo,
    PflLogo,
    SubmissionRadio,
    UfcLogo,
} = Recommended

export const RecommendedData = [
    {
        title: "UFC",
        type: "Promotions",
        description: "The biggest MMA promotion in the world, home to the biggest superstar and best fighters in the world.",
        image: UfcLogo,
        icon: "youtube",
        link: "https://www.youtube.com/ufc"
    },
    {
        title: "Bellator",
        type: "Promotions",
        description: "The second biggest mma promotion in the US and home to some of the best fighters in the world.",
        image: BellatorLogo,
        icon: "youtube",
        link: "https://www.youtube.com/bellator"
    },
    {
        title: "PFL",
        type: "Promotions",
        description: "The only MMA promotion with a league format and seasons. The winner of each season wins a $1 million.",
        image: PflLogo,
        icon: "youtube",
        link: "https://www.youtube.com/c/PFLMMA"
    },
    {
        title: "One Championship",
        type: "Promotions",
        description: "The biggest promotion in Asia, home to the best asian talent and also does kickboxing and muaythai.",
        image: OneLogo,
        icon: "youtube",
        link: "https://www.youtube.com/Onechampionship"
    },
    {
        title: "Espn MMA",
        type: "News",
        description: "The easiest place to get started for new MMA fans with news, interviews and betting tips for fans.",
        image: ESPN_MMA,
        icon: "news",
        link: "https://www.youtube.com/c/ESPNMMA"
    },
    {
        title: "MMA Fighting",
        type: "News",
        description: "The best platform for MMA fans to listen to fighters, managers, promoter interviews and preview fights.",
        image: MMA_Fighting,
        icon: "news",
        link: "https://www.youtube.com/mmafighting"
    },
    {
        title: "MMA Junkie",
        type: "News",
        description: "A great new outlets for hardcore MMA fans who want to follow all fighters across various promotions.",
        image: MMA_Junkie,
        icon: "news",
        link: "https://www.youtube.com/c/MMAjunkieVideo"
    },
    {
        title: "MMA Digest",
        type: "News",
        description: "A good bitesize summary of important MMA news for people who don't have time for articles or interviews.",
        image: MMA_Digest,
        icon: "news",
        link: "https://www.youtube.com/user/mmadigest"
    },
    {
        title: "Anik and Florian",
        type: "Podcast",
        description: "Hosted by UFC commentator Jon Anik and UFC legend Kenny Florian with great interview and betting tips.",
        image: AnikAndFlorian,
        icon: "podcast",
        link: "https://podcasts.apple.com/us/podcast/the-anik-florian-podcast/id985956967"
    },
    {
        title: "JRE",
        type: "Podcast",
        description: "One of the biggest podcasts in the world with amazing MMA insight hosted by UFC commentator Joe Rogan.",
        image: JRE,
        icon: "podcast",
        link: "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk"
    },
    {
        title: "Submission Radio",
        type: "Podcast",
        description: "An Australian podcast hosted by Kacper and Denis which includes great humor, news and fighter interviews.",
        image: SubmissionRadio,
        icon: "podcast",
        link: "https://www.submissionradio.com/episodes/"
    },
    {
        title: "MMA Hour",
        type: "Podcast",
        description: "Prehaps the most popular podcast for MMA fans with great interviews, hosted by respected MMA journalist Ariel Helwani.",
        image: MMA_Hour,
        icon: "podcast",
        link: "https://open.spotify.com/show/0NUQhyUeYQcbtHOV10qmbb"
    },
]

RecommendedData.map((obj: any) => {
    obj.link_type = "external"
    return obj
})