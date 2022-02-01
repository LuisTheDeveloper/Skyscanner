import React from 'react';
import styled from 'styled-components';
import Flights from './Flights';

export const Card = styled.div`
  border-radius: 3px 3px 0 0;
  box-shadow: 0 0 28px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2rem 0.5rem 0;
  padding: 0.5rem;
  transition: transform .3s ease;
  width: 390px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Home = ({ itineraries, legs }) => (
  <div>
    {itineraries.map((flight) => (
      <Card>
        <Flights trip={flight} legs={legs} />
      </Card>
    ))}
  </div>
  );

export default Home;
