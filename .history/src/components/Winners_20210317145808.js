import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';

class Winners extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.races.map(race => {
            return (
                <div className="item" key={race.round}>
                   <h4>Race: {race.raceName}</h4>
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