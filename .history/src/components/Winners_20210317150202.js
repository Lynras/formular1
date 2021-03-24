import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';

class Winners extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.winners.map(winner => {
            return (
                <div className="item" key={winner.raceId}>
                   <h4>Winner: {winner.driverId}</h4>
                   <h5>Circit Name: {race.Circuit.circuitName} </h5>
                   <h5>{race.Circuit.Location.country}</h5>
                   <br></br>   
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { races: state.races };
}

export default connect(mapStateToProps, {fetchRaces})(RaceList);