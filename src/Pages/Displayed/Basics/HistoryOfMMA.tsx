// COMPONENTS
import AntdTimeline from "@libraries/AntdTimeline"
// DATA
import HistoryOfMMAData from "@data/Basics/HistoryOfMMAData"

const HistoryOfMMA = (
    <>
        <p>
            MMA came to prominence in the early 1990's, when the Ultimate Fighting Championship was 
            established in the United States, inviting the world's best fighters to compete in the 
            Octagon to determine who reigned supreme. But the sport has been around much longer than 
            that and shares its origins during man's early history.
        </p>
        <p>
            At its core, MMA is an amalgamation of all combat disciplines, harmoniously combined 
            together to form a seamless, unified system. Considered the purest form of unarmed 
            combat as it takes the greatest elements of various martial arts and mixes them 
            together. Many fans have fallen in love with MMA's undeniable allure, and today 
            the sport has grown as big as any, rivaling that of other sports like basketball 
            and football. Let's examine how the sport came to be and how it all started.
        </p>
        <AntdTimeline 
            data={HistoryOfMMAData} 
            title="A brief history"
        />
    </>
)

export default HistoryOfMMA