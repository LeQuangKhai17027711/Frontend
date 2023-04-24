import React from 'react'
import { Feedback } from './Section/Feedback.js'
import { Service } from './Section/Service.js'
import { Background } from './Section/Background.js'
import { HomeFooter } from './HomeFooter.js'
export const HomeBody = () => {
    return (
        <div>
            <Background />
            <Service />
            <Feedback />
            <HomeFooter />
        </div>
    )
}