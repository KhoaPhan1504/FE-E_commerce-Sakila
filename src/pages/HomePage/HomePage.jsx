import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
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
          height: '100%',
          width: '100%'
        }}>
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]}/>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <WrapperButtonMore textButton='Xem thêm' type='outline' styleButton={{
              border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
              width: '240px', height: '38px', borderRadius: '4px'
            }}
            styleTextButton={{ fontWeight: 500 }}/>
          </div>
      </div>
    </>
  )
}

export default HomePage;