import React from 'react'
import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'
import Login from '../Login'

const Navigation = (props) => (
  <section>
      <NavigationBar activeTab={props.activeTab} />
      <Login />
      <Combobox />
  </section>
)

export default Navigation