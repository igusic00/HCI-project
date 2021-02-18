import HeaderFooterLayout from "../layouts/headerFooter"
import React from "react"
import TendersContent from "../modules/TendersContent"
 
const TendersPage = () => (
    <HeaderFooterLayout activeTab="Natječaji">
        <TendersContent/>
    </HeaderFooterLayout>
)
 
export default TendersPage