import React from "react";
import styled from "styled-components";
import HotelSearchResults from "./HotelSearchResults";
import HotelSuggestions from "./HotelSuggestions";

const ResultsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export default function HotelPageContent(props) {
  return (
    <ResultsContainer>
      <HotelSearchResults searchResults={props.searchResults} cityCode={props.cityCode} checkInDate={props.checkInDate} checkOutDate={props.checkOutDate} roomQuantity={props.roomQuantity} adults={props.adults}
      getNewSavedResult={props.getNewSavedResult} isLoading={props.isLoading} />
      <HotelSuggestions savedResults={props.savedResults}/>
    </ResultsContainer>
  );
}
