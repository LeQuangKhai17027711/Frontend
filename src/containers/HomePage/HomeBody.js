import React from 'react'
import { SendFeedback } from './Section/SendFeedback.js'
import { Service } from './Section/Service.js'
import { Background } from './Section/Background.js'
import { HomeFooter } from './HomeFooter.js'


export const HomeBody = () => {
    return (
        <div>
            <Background />
            <Service />
            <SendFeedback />
            <HomeFooter />
        </div>
    )
}