import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';
import Racelist from ".RaceList"

class RaceList extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.winners.map(winner => {
            return (
                <div className="item" key={winner.results}>
                   <h4>Winner: {winner.results}</h4>
                   <h5>Circit Name: {winner.result.raceId.CircuitId.name} </h5>
                   <h5>{}</h5>
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

export default connect(mapStateToProps, {fetchWinners})(Winners);