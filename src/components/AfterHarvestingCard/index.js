import React from 'react';
import {
  CardWrapper,
  Title,
  Table,
  HeaderRow,
  ColumnHeader,
  Row,
  Label,
  Value,
  TotalRow,
} from './styledComponents';

const AfterHarvestingCard = ({ preGains, postGains }) => {
  if (!preGains || !postGains) return null;

  const format = (val) => (val || 0).toFixed(2);

  const realisedCapitalGains =
    (postGains.stcg.profits || 0) -
    (postGains.stcg.losses || 0) +
    (postGains.ltcg.profits || 0) -
    (postGains.ltcg.losses || 0);

  return (
    <CardWrapper>
      <Title>After Harvesting</Title>
      <Table>
        <HeaderRow>
          <ColumnHeader></ColumnHeader>
          <ColumnHeader>Short Term</ColumnHeader>
          <ColumnHeader>Long Term</ColumnHeader>
        </HeaderRow>
        <Row>
          <Label>Profits</Label>
          <Value>{format(postGains.stcg.profits)}</Value>
          <Value>{format(postGains.ltcg.profits)}</Value>
        </Row>
        <Row>
          <Label>Losses</Label>
          <Value>{format(postGains.stcg.losses)}</Value>
          <Value>{format(postGains.ltcg.losses)}</Value>
        </Row>
        <Row>
          <Label>Net Capital Gains</Label>
          <Value>{format((postGains.stcg.profits || 0) - (postGains.stcg.losses || 0))}</Value>
          <Value>{format((postGains.ltcg.profits || 0) - (postGains.ltcg.losses || 0))}</Value>
        </Row>
        <TotalRow>
          <Label>Realised Capital Gains:</Label>
          <Value>{format(realisedCapitalGains)}</Value>
        </TotalRow>
      </Table>
    </CardWrapper>
  );
};

export default AfterHarvestingCard;
