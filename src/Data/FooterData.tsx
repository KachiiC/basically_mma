// DATA
import DataOverview from "Data/DataOverview"
// TOOLS
import { ObjectDataRender, ObjectIconDataRender } from "Tools/ObjectDataTools"

const { footer_pages, social_media } = DataOverview

export const FooterLogoData = ObjectIconDataRender(social_media)

export const FooterPages = ObjectDataRender(footer_pages)