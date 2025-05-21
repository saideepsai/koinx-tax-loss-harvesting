import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const SubheadingWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 8px;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

export const Subheading = styled.div`
  font-size: 14px;
  color: #4B5563;
  cursor: pointer;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  opacity: 0;
  background-color: #111827;
  color: #ffffff;
  text-align: left;
  border-radius: 6px;
  padding: 6px 10px;
  position: absolute;
  top: 125%;
  left: 0;
  white-space: normal;
  width: 300px;
  z-index: 10;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #111827 transparent;
  }
`;
