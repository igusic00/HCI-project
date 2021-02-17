import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import Slideshow from '../modules/Slideshow'
import PageContent from "../modules/PageContent"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Naslovnica">
    <Slideshow />
    <PageContent />
  </HeaderFooterLayout>
)
 
export default IndexPage