import React from 'react';
import { HeaderWrapper, Logo, RightSection, IconWrapper, Avatar } from './styledComponents';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="/koinx-logo.png" alt="KoinX Logo" />

      <RightSection>
        <IconWrapper>
          <Bell size={20} />
        </IconWrapper>
      </RightSection>
    </HeaderWrapper>
  );
};

export default Header;
