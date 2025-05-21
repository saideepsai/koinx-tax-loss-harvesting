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

function PreHarvestingCard({ capitalGains }) {
  const stcg = capitalGains?.stcg || {};
  const ltcg = capitalGains?.ltcg || {};

  const realisedCapitalGains =
    (stcg.profits || 0) - (stcg.losses || 0) + (ltcg.profits || 0) - (ltcg.losses || 0);

  const format = (value) => (value || 0).toFixed(2); // Plain number, no currency symbol

  return (
    <CardWrapper>
      <Title>Pre-Harvesting</Title>
      <Table>
        <HeaderRow>
          <ColumnHeader></ColumnHeader>
          <ColumnHeader>Short Term</ColumnHeader>
          <ColumnHeader>Long Term</ColumnHeader>
        </HeaderRow>
        <Row>
          <Label>Profits</Label>
          <Value>{format(stcg.profits)}</Value>
          <Value>{format(ltcg.profits)}</Value>
        </Row>
        <Row>
          <Label>Losses</Label>
          <Value>{format(stcg.losses)}</Value>
          <Value>{format(ltcg.losses)}</Value>
        </Row>
        <Row>
          <Label>Net Capital Gains</Label>
          <Value>{format((stcg.profits || 0) - (stcg.losses || 0))}</Value>
          <Value>{format((ltcg.profits || 0) - (ltcg.losses || 0))}</Value>
        </Row>
        <TotalRow>
          <Label>Realised Capital Gains:</Label>
          <Value>{format(realisedCapitalGains)}</Value>
        </TotalRow>
      </Table>
    </CardWrapper>
  );
}

export default PreHarvestingCard;
