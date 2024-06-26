import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assests/Slider/Slider-01.jpeg'
import slider2 from '../../assests/Slider/Slider-02.jpeg'
import slider3 from '../../assests/Slider/Slider-03.jpeg'
import slider4 from '../../assests/Slider/Slider-04.jpeg'
import slider5 from '../../assests/Slider/Slider-05.jpeg'
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr = [ 'TV', 'Shoe', 'Laptop']
  return (
    <>
      <div style={{ padding: '0 120px'}}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item} />

            )
          })}
        </WrapperTypeProduct>
      </div>
      <div 
        id='container' 
        style={{ 
          backgroundColor: '#efefef',
          padding: '0px 120px',
          height: '1000px'
        }}>
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]}/>
          <div  
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }} 
          >
            <CardComponent />
          </div>
      </div>
    </>
  )
}

export default HomePage;