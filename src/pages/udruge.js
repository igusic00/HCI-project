import HeaderFooterLayout from "../layouts/headerFooter"
import React from "react"
import SocietyContent from "../modules/SocietyContent"
 
const SocietyPage = () => (
    <HeaderFooterLayout activeTab="Udruge">
        <SocietyContent/>
    </HeaderFooterLayout>
)
 
export default SocietyPage