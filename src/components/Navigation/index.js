import React from 'react'
import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'
import Login from '../Login'
import Search from '../Search'

const Navigation = (props) => (
  <section>
      <NavigationBar activeTab={props.activeTab} />
      <Login />
      <Search/>
      <Combobox />
  </section>
)

export default Navigation