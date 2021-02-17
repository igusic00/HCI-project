import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import NewsContent from "../modules/NewsContent"
 
const NewsPage = () => (
    <HeaderFooterLayout activeTab="Vijesti">
        <NewsContent/>
    </HeaderFooterLayout>
)
 
export default NewsPage