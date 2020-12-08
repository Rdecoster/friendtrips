import React from "react";
import FlightForm from "./FlightForm.jsx";
import SearchResults from "./SearchResults.jsx";
import Suggestions from "./Suggestions.jsx";
import styled from "styled-components";
import axios from 'axios';
// import Itinerary from '../ItineraryBuilder/Itinerary.jsx';

//entire screen
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #6886c5;
`
const Content = styled.div`
  border: solid 1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  height: 80%;
  justify-content: space-between;
  background-color: #E6DBFF;
`;
//^^ height will control size of the bottom section
// form height and content should add up to equal 1--%

const PreSearchResults = styled.div`
  border: solid 1px;
  height: 100%;
  width: 66%;
  float: left;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      savedResults: [],
      upvotes: [],
      downvotes: []
    };

    this.displaySearchFeed = this.displaySearchFeed.bind(this);
    this.getSavedResults = this.getSavedResults.bind(this);
    this.getNewSavedResult = this.getNewSavedResult.bind(this);
  }

  displaySearchFeed(data) {
    this.setState({
      searchResults: data,
    });
  }


  getNewSavedResult(result) {
    let newSavedArray = [];
    newSavedArray.push(result)
    this.setState({ savedResults: [...this.state.savedResults, newSavedArray[0]] });
  }

  getSavedResults() {
    axios.get("http://morning-bayou-59969.herokuapp.com/flights/?trip_id=2")

      .then((data) => {
        let savedArray = [];
        console.log(data, "data.data")
        for (let keys in data.data) {
          savedArray.push(data.data[keys])
        }
        console.log("savedArray", savedArray);
        let upvoteNames = [];
        let downvoteNames = [];
        for (var i = 0; i < savedArray.length; i++) {
          upvoteNames.push(savedArray[i].meta.upvote_names);
          downvoteNames.push(savedArray[i].meta.downvote_names);
        }
        this.setState({
          savedResults: savedArray,
          upvotes: upvoteNames,
          downvotes: downvoteNames
        })
      })
      .catch(console.log)
  }

  componentDidMount() {
    this.getSavedResults();
  }

  render() {
    return (
      <Container>
        <FlightForm displaySearchFeed={this.displaySearchFeed} />
        <Content>

          <SearchResults searchResults={this.state.searchResults} getNewSavedResult={this.getNewSavedResult} />
          <Suggestions savedResults={this.state.savedResults} />
        </Content>
      </Container>
    );
  }
}

export default App;
