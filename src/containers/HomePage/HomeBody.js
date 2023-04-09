import React from 'react'
import { Staff } from './Section/Staff.js'
import { Production } from './Section/Production.js'
import { Background } from './Section/Background.js'

export const HomeBody = () => {
    return (
        <div>
            <Background />
            <Staff />
            <Production />
        </div>
    )
}