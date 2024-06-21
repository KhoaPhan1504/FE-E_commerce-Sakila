import { Row } from "antd";
import styled from 'styled-components';

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(250, 81, 48);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 12px;
`;

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`;


