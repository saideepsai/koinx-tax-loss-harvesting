import React, { useState } from 'react';

import {
  Wrapper,
  Header,
  TitleRow,
  TitleText,
  ToggleIcon,
  Content,
  DisclaimerList,
} from './styledComponents';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <TitleRow>
          <Info size={16} strokeWidth={2} />
          <TitleText>Important Notes & Disclaimers</TitleText>
        </TitleRow>
        <ToggleIcon>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </ToggleIcon>
      </Header>
      {isOpen && (
        <Content>
          <DisclaimerList>
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </DisclaimerList>
        </Content>
      )}
    </Wrapper>
  );
};

export default Disclaimer;
