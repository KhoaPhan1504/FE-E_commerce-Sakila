import React from 'react';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import InputForm from '../../components/InputFormComponent/InputForm';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import imageLogo from '../../assests/login/login.png';
import { Image } from 'antd';

const SignUpPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{display: 'flex', width: '800px', height: '527px', borderRadius: '6px', backgroundColor: '#fff'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px'}} placeholder='abc@gmail.com'/>
          <InputForm style={{ marginBottom: '10px'}} placeholder='password'/>
          <InputForm placeholder='confirm password'/>
          <ButtonComponent
            bordered={false}
            size={40} 
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={"Đăng ký"}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
          <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='Logo Login' height='203px' width='203px' />
          <h4>Mua sắm thả ga tại Sakila</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage;