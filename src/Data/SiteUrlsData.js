const Kachiis_Rest = "https://kachiis-rest.herokuapp.com/"

// API SERVER
const api_server = Kachiis_Rest + "api/"
export const FeaturedFightURL = api_server + "youtube_featured_video"
export const SuggestedFightsURL = api_server +"youtube_playlists/ufc_fights"
export const HomeVideoGalleryURL = api_server + "youtube_playlists/fight_highlights"
export const InstagramURL = api_server + "instagram_list_refresh"
export const HighlightsURL = api_server + "youtube_playlists/fight_highlights"

// BACKEND SERVER
const backend_server = Kachiis_Rest + "backend/"
export const FeaturedFighterURL = backend_server + "mma_featured_fighter"
export const ArticlesListURL = backend_server + "mma_articles_list"
export const TechniquesListURL = backend_server + "mma_techniques_list"
export const DictionaryListURL = backend_server + "mma_dictionary_list"
export const DivisionsURL = backend_server + "mma_divisions_list/mma_mens_p4p"
export const StoreItemsURL = backend_server + "mma_store_list/"