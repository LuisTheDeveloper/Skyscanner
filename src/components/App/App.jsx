import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Home from '../Home';
import flightsData from '../../data/flights.json';

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
    width: 100%;
`;

export const App = () => {
  const data = [];
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    data.push(flightsData);
    setItineraries(data.reduce((acc, item) => [...acc, ...item.itineraries], []));
    setLegs(data.reduce((acc, item) => [...acc, ...item.legs], []));
  }, [flightsData]);

  return (
    <>
      <Header />
      <Container>
        <Home itineraries={itineraries} legs={legs} />
      </Container>
    </>
  );
};

export default App;
