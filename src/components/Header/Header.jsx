import React from 'react';
import styled from 'styled-components';
import { skyscanner } from '../../utils/icons';

export const LogoWrapper = styled.div`
    align-items: left;
    background: #ffffff;
    box-shadow: 10px 10px 10px rgb(0 0 0 / 15%);  
    display: flex;
    height: 3.5rem;
    justify-content: left;
    max-width: 480px;
`;

export const Logo = styled.img`
    align-items: left;
    height: 4rem;
    justify-content: left;
    max-width: 480px;
    width: 14rem;
`;

const Header = () => (
  <>
    <LogoWrapper>
      <Logo
        src={skyscanner}
        alt="menu"
      />
    </LogoWrapper>
  </>
    );
export default Header;
