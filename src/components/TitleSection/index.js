import React from 'react';
import {
  Wrapper,
  Heading,
  SubheadingWrapper,
  Subheading,
  TooltipText,
} from './styledComponents';

const TitleSection = () => {
  return (
    <Wrapper>
      <Heading>Tax Harvesting</Heading>
      <SubheadingWrapper>
        <Subheading>How it works?</Subheading>
        <TooltipText>
        Lorem ipsum dolor sit amet consectetur. Euismod id posuere nibh semper mattis scelerisque tellus. Vel mattis diam duis morbi tellus dui consectetur. Know More
        </TooltipText>
      </SubheadingWrapper>
    </Wrapper>
  );
};

export default TitleSection;
