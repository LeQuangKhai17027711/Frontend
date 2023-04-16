import React from 'react'
import { Staff } from './Section/Staff.js'
import { Production } from './Section/Production.js'
import { Background } from './Section/Background.js'
import { HomeFooter } from './HomeFooter.js'
export const HomeBody = () => {
    return (
        <div>
            <Background />
            <Staff />
            <Production />
            <HomeFooter />
        </div>
    )
}