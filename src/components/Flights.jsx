import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getDateTimeDiff } from '../utils/utils';
import Button from './core/Button';
import { BA, LH, WZ } from '../utils/icons';

export const LegsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const LegDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const LegInfo = styled.div`
    display: flex;
    max-width: 32%;
    padding-top: 1rem;
    padding-right: 0.375rem;
    flex-direction: column;
    align-items: flex-start;
    flex: 0 1 32%;
    text-align: right;
`;

export const LegTimeInfo = styled.div`
    display: flex;
    max-width: 32%;
    padding-top: 1rem;
    padding-right: 0.375rem;
    flex-direction: column;
    align-items: flex-end;
    flex: 0 1 32%;
    text-align: right;
`;

export const LegArrow = styled.span`
    align-self: flex-end;
    padding-right: 1rem;
`;

export const ButtonWrapper = styled.div`
    align-items: right;
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

export const Logo = styled.img`
    align-items: left;
    height: 3rem;
    justify-content: left;
    padding: 1rem 1rem 1rem 0;
    width: 3rem;
`;

export const AirportSpan = styled.span`
    color:#828181;
    font-size: 18px;
    font-weight: 600;
`;

export const PriceSpan = styled.span`
    font-size: 26px;
    font-weight: 600;
`;

export const StopSpan = styled.span`
    color:${(props) => props.color};
    font-size: 13px;
    font-weight: 700;
`;

export const TimeSpan = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const TimeDiffSpan = styled.span`
    color:#828181;
    font-size: 13px;
    font-weight: 600;
`;

export const Flights = ({ trip, legs }) => {
    const leg1 = legs.find((flight) => flight.id === trip.legs[0]);
    const leg2 = legs.find((flight) => flight.id === trip.legs[1]);

    const departureTime1 = leg1.departure_time;
    const arrivalTime1 = leg1.arrival_time;

    const departureTime2 = leg2.departure_time;
    const arrivalTime2 = leg2.arrival_time;

    const getIcon = (id) => {
        if (id === 'BA') return BA;
        if (id === 'LH') return LH;
        if (id === 'WZ') return WZ;
        return null;
    };

    const getStops = (stops) => (stops === 0 ? 'Direct' : `${stops} Stop`);
    const getColor = (stops) => (stops === 0 ? '#5ebfb2' : '#e24e55');
  return (
    <div>
      <LegsContainer>
        <LegDetailsContainer>
          <Logo
            src={getIcon(leg1.airline_id)}
            alt="menu"
          />
          <LegInfo>
            <TimeSpan>{` ${moment(departureTime1).format('HH:mm')} `}</TimeSpan>
            <LegArrow><ArrowForwardIcon /></LegArrow>
            <AirportSpan>{` ${leg1.departure_airport} `}</AirportSpan>
          </LegInfo>
          <LegInfo>
            <TimeSpan>{` ${moment(arrivalTime1).format('HH:mm')} `}</TimeSpan>
            <AirportSpan>{` ${leg1.arrival_airport} `}</AirportSpan>
          </LegInfo>
          <LegTimeInfo>
            <TimeDiffSpan>{getDateTimeDiff(leg1.departure_time, leg1.arrival_time)}</TimeDiffSpan>
            <StopSpan color={getColor(leg1.stops)}>{getStops(leg1.stops)}</StopSpan>
          </LegTimeInfo>
        </LegDetailsContainer>
      </LegsContainer>
      <LegsContainer>
        <LegDetailsContainer>
          <Logo
            src={LH}
            alt="menu"
          />
          <LegInfo>
            <TimeSpan>{` ${moment(departureTime2).format('HH:mm')} `}</TimeSpan>
            <LegArrow><ArrowForwardIcon /></LegArrow>
            <AirportSpan>{` ${leg2.departure_airport} `}</AirportSpan>
          </LegInfo>
          <LegInfo>
            <TimeSpan>{` ${moment(arrivalTime2).format('HH:mm')} `}</TimeSpan>
            <AirportSpan>{` ${leg2.arrival_airport} `}</AirportSpan>
          </LegInfo>
          <LegTimeInfo>
            <TimeDiffSpan>{getDateTimeDiff(leg2.departure_time, leg2.arrival_time)}</TimeDiffSpan>
            <StopSpan color={getColor(leg1.stops)}>{getStops(leg2.stops)}</StopSpan>
          </LegTimeInfo>
        </LegDetailsContainer>
      </LegsContainer>
      <LegsContainer>
        <PriceSpan>
          {trip.price}
        </PriceSpan>
        {trip.agent}
      </LegsContainer>
      <ButtonWrapper>
        <Button
          cursor="default"
          variant="success"
          height="2rem"
          title="select"
          width="6rem"
        ><span>Select</span>
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Flights;
