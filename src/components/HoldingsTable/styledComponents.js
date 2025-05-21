import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(56, 64, 88, 0.06);
  padding: 24px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #383C40;
  margin: 0;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
`;

export const Th = styled.th`
  text-align: left;
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #6B7280;
  background-color: #F9FAFB;
  vertical-align: bottom;
  border-bottom: 1px solid #E5E7EB;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

export const SortableTh = styled.th`
  text-align: left;
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #6B7280;
  background-color: #F9FAFB;
  vertical-align: bottom;
  border-bottom: 1px solid #E5E7EB;
  cursor: pointer;
  user-select: none;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }

  &:hover {
    background-color: #E0E7FF;
    color: #1E40AF;
  }
`;

export const SortIcon = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: #2563eb;
`;

export const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #E5E7EB;
  background-color: #ffffff;
  vertical-align: middle;

  tr:hover & {
    background-color: #F9FAFB;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const SmallText = styled.div`
  font-size: 10px;
  color: #9CA3AF;
  margin-top: 4px;
`;

export const ViewMoreButton = styled.button`
  align-self: flex-start;
  margin-top: 16px;
  background: none;
  border: none;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const PriceText = styled.span`
  color: ${({ value }) => (value >= 0 ? 'green' : 'red')};
  cursor: default;
  position: relative;
`;


export const Tooltip = styled.div`
  position: fixed;
  transform: translate(-50%, -100%);
  background: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 9999;
  box-shadow: 0 0 5px rgba(0,0,0,0.3);
  user-select: none;
`;