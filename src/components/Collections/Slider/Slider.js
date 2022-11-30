import React from 'react'
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel() {
    return (
        <CarouselProvider
        naturalSlideWidth={70}
        naturalSlideHeight={20}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
      >
        <Slider>
          <Slide index={0}>
            <div className=' flex'>
                <div className='w-1/2 pr-2'>
                    <img className='w-full' src="./images/collections/banner1.svg" alt="banner-1" />
                </div>

                <div className='w-1/2 flex justify-end pr-2' >
                    <img className='w-full' src="./images/collections/banner2.svg" alt="banner-2" />
                </div>
            </div>
          </Slide>
          <Slide index={1}>
          <div className=' flex'>
                <div className='w-1/2 pr-2'>
                    <img className='w-full' src="./images/collections/banner1.svg" alt="banner-1" />
                </div>

                <div className='w-1/2 flex justify-end pr-2' >
                    <img className='w-full' src="./images/collections/banner2.svg" alt="banner-2" />
                </div>
            </div>
          </Slide>
          <Slide index={2}>
          <div className=' flex'>
                <div className='w-1/2 pr-2'>
                    <img className='w-full' src="./images/collections/banner1.svg" alt="banner-1" />
                </div>

                <div className='w-1/2 flex justify-end pr-2' >
                    <img className='w-full' src="./images/collections/banner2.svg" alt="banner-2" />
                </div>
            </div>
          </Slide>
        </Slider>

      </CarouselProvider>
    )
}
