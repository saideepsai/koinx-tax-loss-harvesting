import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import TitleSection from './components/TitleSection';
import Disclaimer from './components/Disclaimer';
import PreHarvestingCard from './components/PreHarvestingCard';
import AfterHarvestingCard from './components/AfterHarvestingCard';
import HoldingsTable from './components/HoldingsTable';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: auto;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  const [capitalGains, setCapitalGains] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [selectedHoldings, setSelectedHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
    fetchCapitalGains();
  }, []);

  const fetchHoldings = async () => {
    try {
      const res = await fetch('/holdings-api.json');
      const data = await res.json();
      setHoldings(Array.isArray(data.holdings) ? data.holdings : []);
    } catch (err) {
      console.error('Failed to fetch holdings:', err);
      setHoldings([]);
    }
  };

  const fetchCapitalGains = async () => {
    try {
      const res = await fetch('/capital-gains-api.json');
      const data = await res.json();
      setCapitalGains(data.capitalGains || null);
    } catch (err) {
      console.error('Failed to fetch capital gains:', err);
      setCapitalGains(null);
    }
  };

  const toggleHolding = (index) => {
    if (selectedHoldings.includes(index)) {
      setSelectedHoldings(selectedHoldings.filter(i => i !== index));
    } else {
      setSelectedHoldings([...selectedHoldings, index]);
    }
  };

  const toggleAll = () => {
    if (holdings.length > 0 && selectedHoldings.length === holdings.length) {
      setSelectedHoldings([]);
    } else {
      setSelectedHoldings(holdings.map((_, i) => i));
    }
  };

  const getPostHarvestingGains = () => {
    if (!capitalGains) return null;

    // Clone pre-harvesting gains
    let stcg = { ...capitalGains.stcg };
    let ltcg = { ...capitalGains.ltcg };

    // Adjust gains based on selected holdings
    selectedHoldings.forEach(index => {
      const h = holdings[index];
      if (!h) return;

      if (h.stcg.gain > 0) stcg.profits += h.stcg.gain;
      else stcg.losses += Math.abs(h.stcg.gain);

      if (h.ltcg.gain > 0) ltcg.profits += h.ltcg.gain;
      else ltcg.losses += Math.abs(h.ltcg.gain);
    });

    return { stcg, ltcg };
  };

  const postHarvestGains = getPostHarvestingGains();

  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <TitleSection />
        <Disclaimer />
        <CardsWrapper>
          {capitalGains && <PreHarvestingCard capitalGains={capitalGains} />}
          {postHarvestGains && (
            <AfterHarvestingCard
              preGains={capitalGains}
              postGains={postHarvestGains}
            />
          )}
        </CardsWrapper>
        <HoldingsTable
          holdings={holdings}
          selectedHoldings={selectedHoldings}
          toggleHolding={toggleHolding}
          toggleAll={toggleAll}
          allSelected={holdings.length > 0 && selectedHoldings.length === holdings.length}
        />
      </Container>
    </>
  );
}

export default App;
