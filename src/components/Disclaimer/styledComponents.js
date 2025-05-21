import styled from 'styled-components';

export const Wrapper = styled.div`
   background-color: #EAF2FF;
  border-radius: 12px;
  padding: 16px 20px;
  margin-top: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    display: block;
  }
`;

export const TitleText = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin-top: 12px;
`;

export const DisclaimerList = styled.ul`
  padding-left: 20px;
  margin: 0;
  color: #555;
  font-size: 14px;
  line-height: 1.6;

  li {
    margin-bottom: 8px;
  }
`;
