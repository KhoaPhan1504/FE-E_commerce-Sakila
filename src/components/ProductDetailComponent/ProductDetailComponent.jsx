import { Col, Image, InputNumber, Row } from 'antd';
import React from 'react';
import imageProduct from '../../assests/products/Product-big-01.webp';
import imgSmall01 from '../../assests/products/Small.webp';
import imgSmall02 from '../../assests/products/Small-02.webp';
import imgSmall03 from '../../assests/products/Small-03.webp';
import imgSmall04 from '../../assests/products/Small-04.webp';
import imgSmall05 from '../../assests/products/Small-05.webp';
import imgSmall06 from '../../assests/products/Small-06.webp';
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ProductDetailComponent = () => {
  const onChange = () => {}
  return (
        <Row style={{ padding: '16px', background: '#fff'}}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px', borderRadius: '4px'}}>
                <Image src={imageProduct} alt='Image product' preview={false}/>
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between'}}>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall01} alt='Image small product' preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall02} alt='Image small product' preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall03} alt='Image small product' preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall04} alt='Image small product' preview={false} />  
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall05} alt='Image small product' preview={false} />
                  </WrapperStyleColImage>
                  <WrapperStyleColImage span={4} >
                    <WrapperStyleImageSmall src={imgSmall06} alt='Image small product' preview={false} />
                  </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '10px'}}>
              <WrapperStyleNameProduct>Nồi áp suất Elmich PCE-1805 dung tích 2.5L - Hàng Chính Hãng</WrapperStyleNameProduct>
              <div>
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,195,6)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,195,6)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,195,6)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,195,6)' }} />
                <StarFilled style={{ fontSize: '12px', color: 'rgb(253,195,6)' }} />
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
              </div>
              <WrapperPriceProduct>
                <WrapperPriceTextProduct>1.000.000</WrapperPriceTextProduct>
              </WrapperPriceProduct>
              <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span> - 
                <span className='change-address'>Đổi địa chỉ</span>
              </WrapperAddressProduct>
              <div style={{ margin: '10px 0 20px', padding: '10px 0',borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                <div style={{ marginBottom: '10px'}}>Số Lượng</div>
                <WrapperQualityProduct>
                  <button style={{ border: 'none', background: 'transparent'}} >
                    <MinusOutlined style={{color: '#000', fontSize: '20px'}}/>
                  </button>
                  <WrapperInputNumber defaultValue={3} onChange={onChange} size='small'/>
                  <button style={{ border: 'none', background: 'transparent'}} >
                    <PlusOutlined style={{color: '#000', fontSize: '20px'}}/>
                  </button>
                </WrapperQualityProduct>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
                <ButtonComponent
                  bordered={false}
                  size={40} 
                  styleButton={{
                    background: 'rgb(255, 57, 69)',
                    height: '48px',
                    width: '220px',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  textButton={"Chọn mua"}
                  styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                ></ButtonComponent>
                <ButtonComponent
                  bordered={false}
                  size={40} 
                  styleButton={{
                    background: '#fff',
                    height: '48px',
                    width: '220px',
                    border: '1px solid rgb(13, 92, 182)',
                    borderRadius: '4px'
                  }}
                  textButton={"Mua trả sau"}
                  styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                ></ButtonComponent>
              </div>
            </Col>
        </Row>
  )
}

export default ProductDetailComponent;