import styled from 'styled-components';

export const CardWrapper = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #3C9AFF 2.5%, #0066FE 100.05%);
);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  min-width: 320px;
`;

export const Title = styled.h3`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Table = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HeaderRow = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 4px;
`;

export const ColumnHeader = styled.div`
  color: #ffffff;
  flex: 1;
  text-align: right;

  &:first-child {
    text-align: left;
    flex: 1.2;
  }
`;

export const Row = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.div`
  color: #ffffff;
  flex: 1.2;
  font-size: 14px;
  
`;

export const Value = styled.div`
  color: #ffffff;
  flex: 1;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  
  transition: background 0.2s ease;
  padding: 2px 6px;
  border-radius: 4px;

  &:hover {
    background-color: #f0f8ff;
    cursor: default;
  }

  &::before {
    content: '$';
    margin-right: 2px;
    
    font-weight: 500;
  }
`;

export const TotalRow = styled(Row)`
  color: #ffffff;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid #e5e5e5;

  ${Value} {
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
  }

  ${Label} {
    color: #ffffff;
    font-weight: 600;
  }
`;
