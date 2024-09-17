import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1 id='projects'>Portfolio Projects</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
            <ul className='cards__items'>
              
                <CardItem src="images/image-3.png"
                          text="Ingrained Prototyped Video Game "
                          label="Unreal Engine"
                          path="/Ingrained"/>
                           &nbsp;
                <CardItem src="images/image-4.png"
                          text="Gray Spider Social Engineering app "
                          label="Android Studio"
                          path="/GraySpider"/>
               
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
