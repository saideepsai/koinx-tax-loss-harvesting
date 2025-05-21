import React, { useState, useMemo } from 'react';
import {
  Container,
  Header,
  Title,
  TableWrapper,
  Table,
  Th,
  Td,
  Checkbox,
  SmallText,
  ViewMoreButton,
  PriceText,
  SortableTh,
  SortIcon,
  Tooltip,
} from './styledComponents';

function HoldingsTable({
  holdings,
  selectedHoldings,
  toggleHolding,
  toggleAll,
  allSelected,
}) {
  const [showAll, setShowAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // For tooltip
  const [tooltip, setTooltip] = useState({ visible: false, value: '', x: 0, y: 0 });

  const onSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const sortedHoldings = useMemo(() => {
    if (!sortConfig.key) return holdings;

    return [...holdings].sort((a, b) => {
      let aVal, bVal;

      switch (sortConfig.key) {
        case 'currentPrice':
          aVal = a.currentPrice;
          bVal = b.currentPrice;
          break;
        case 'stcg':
          aVal = a.stcg.gain;
          bVal = b.stcg.gain;
          break;
        case 'ltcg':
          aVal = a.ltcg.gain;
          bVal = b.ltcg.gain;
          break;
        case 'coinName':
          aVal = a.coinName.toLowerCase();
          bVal = b.coinName.toLowerCase();
          break;
        case 'totalHolding':
          aVal = a.totalHolding;
          bVal = b.totalHolding;
          break;
        default:
          aVal = 0;
          bVal = 0;
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [holdings, sortConfig]);

  const rowsToShow = showAll ? sortedHoldings.length : 4;
  const displayedHoldings = sortedHoldings.slice(0, rowsToShow);

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return <SortIcon>{sortConfig.direction === 'asc' ? '▲' : '▼'}</SortIcon>;
  };

  // Show tooltip
  const showTooltip = (e, value) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      value,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
  };

  // Hide tooltip
  const hideTooltip = () => {
    setTooltip({ visible: false, value: '', x: 0, y: 0 });
  };

  return (
    <Container>
      <Header>
        <Title>Holdings</Title>
      </Header>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>
                <Checkbox checked={allSelected} onChange={toggleAll} />
              </Th>
              <SortableTh onClick={() => onSort('coinName')}>
                Asset {renderSortIcon('coinName')}
              </SortableTh>
              <SortableTh onClick={() => onSort('totalHolding')}>
                Holdings<br />
                <SmallText>avg buy price</SmallText>
              </SortableTh>
              <SortableTh onClick={() => onSort('currentPrice')}>
                Current Price {renderSortIcon('currentPrice')}
              </SortableTh>
              <SortableTh onClick={() => onSort('stcg')}>
                Short Term {renderSortIcon('stcg')}
              </SortableTh>
              <SortableTh onClick={() => onSort('ltcg')}>
                Long Term {renderSortIcon('ltcg')}
              </SortableTh>
              <Th>Amount to Sell</Th>
            </tr>
          </thead>
          <tbody>
            {displayedHoldings.map((h, i) => {
              const isSelected = selectedHoldings.includes(i);
              return (
                <tr key={h.coin}>
                  <Td>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => toggleHolding(i)}
                    />
                  </Td>
                  <Td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                      src={h.logo}
                      alt={h.coinName}
                      style={{ width: 25, height: 31, borderRadius: '50%' }}
                    />
                    {h.coinName}
                  </Td>
                  <Td>
                    {h.totalHolding.toFixed(6)}
                    <br />
                    <SmallText>${h.averageBuyPrice.toFixed(2)}</SmallText>
                  </Td>
                  <Td>
                    <PriceText
                      value={h.currentPrice}
                      onMouseEnter={(e) => showTooltip(e, `$${h.currentPrice.toFixed(6)}`)}
                      onMouseLeave={hideTooltip}
                    >
                      ${h.currentPrice.toFixed(2)}
                    </PriceText>
                  </Td>
                  <Td>
                    <PriceText
                      value={h.stcg.gain}
                      onMouseEnter={(e) => showTooltip(e, `$${h.stcg.gain.toFixed(6)}`)}
                      onMouseLeave={hideTooltip}
                    >
                      ${h.stcg.gain.toFixed(2)}
                    </PriceText>
                  </Td>
                  <Td>
                    <PriceText
                      value={h.ltcg.gain}
                      onMouseEnter={(e) => showTooltip(e, `$${h.ltcg.gain.toFixed(6)}`)}
                      onMouseLeave={hideTooltip}
                    >
                      ${h.ltcg.gain.toFixed(2)}
                    </PriceText>
                  </Td>
                  <Td>{isSelected ? h.totalHolding.toFixed(6) : '-'}</Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrapper>

      {holdings.length > 4 && (
        <ViewMoreButton onClick={() => setShowAll(!showAll)}>
          {showAll ? 'View Less' : 'View More'}
        </ViewMoreButton>
      )}

      {tooltip.visible && (
        <Tooltip style={{ top: tooltip.y, left: tooltip.x }}>
          {tooltip.value}
        </Tooltip>
      )}
    </Container>
  );
}

export default HoldingsTable;
