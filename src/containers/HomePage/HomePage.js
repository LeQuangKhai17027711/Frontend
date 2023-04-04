import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeHeader } from './HomeHeader.js'
import { Staff } from './Section/Staff.js'
import { Production } from './Section/Production.js'
import { HomeFooter } from './HomeFooter.js'
export const HomePage = () => {
    return (
        <div>
            <HomeHeader />
            <Staff />
            <Production />
            <HomeFooter />
        </div>
    )
}