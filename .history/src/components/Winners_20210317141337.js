import React from 'react';
import { connect } from 'react-redux';
import { fetchRaces } from '../actions';

class RaceList extends React.Component {

    componentDidMount(){
        this.props.fetchRaces();
    }
    renderList() {
        return this.props.races.map(winner => {
            return (
                <div className="item" key={winner.}>
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