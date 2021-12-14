// COMPONENTS
import FilterCardsGallery from "Components/FilterComponents/FilterCardsGallery"
// DATA
import { RecommendedData } from "@data/MMAWorld/RecommendedData"

const Recommended = (
    <>
        <div className="recommended-container"> 
            <h1>Recommended</h1>
            <p>
                A great way to develop your knowledge outside of watching live events is to follow the 
                sport across all platforms. Whether you want to learn more about the different fighters, 
                hear about upcoming bouts, understand technique a little more or just watch old 
                fights - there are a number of ways to do this online.
            </p>
            <p>
                Here is a list of youtube channels, podcasts and outlets that will help you 
                understand the sport better.
            </p>
        </div>
        <FilterCardsGallery
            data={RecommendedData} 
            card_size="medium" 
            // type="icons"
        />
    </>
    
)

export default Recommended