import HeaderFooterLayout from "../layouts/headerFooter"
import React from "react"
import AdsContent from "../modules/AdsContent"
 
const AdsPage = () => (
    <HeaderFooterLayout activeTab="Oglasnik">
        <AdsContent/>
    </HeaderFooterLayout>
)
 
export default AdsPage