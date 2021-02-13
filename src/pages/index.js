import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import Slideshow from '../modules/Slideshow'
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Naslovnica">
    <Slideshow />
  </HeaderFooterLayout>
)
 
export default IndexPage