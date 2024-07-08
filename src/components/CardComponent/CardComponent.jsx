import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style';
import {
    StarFilled
  } from '@ant-design/icons';
import logo_official from '../../assests/Logo/official.png';


const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{ width: '200px', height: '200px'}}
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <WrapperImageStyle src={logo_official} alt='logo-official'/>
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{ marginRight: '4px'}}>
                <span>4.5 </span><StarFilled style={{ fontSize: '12px', color: '#FFBF00' }} />
            </span>
            <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
        </WrapperReportText>
        <WrapperPriceText>
                <span style={{marginRight: '8px'}}>1.000.000 đ</span>
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent;