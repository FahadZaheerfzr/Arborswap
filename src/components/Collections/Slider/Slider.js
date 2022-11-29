import React from 'react'
import {Carousel} from 'react-responsive-carousel'

export default function Slider() {
    return (
        <Carousel autoPlay >
            <div>
                <img src="./images/collections/banner-1.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="./images/collections/banner-2.png" />
                <p className="legend">Legend 2</p>
            </div>

        </Carousel>
    )
}
