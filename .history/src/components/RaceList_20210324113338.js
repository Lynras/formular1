import React from 'react';
import { connect } from 'react-redux';
import { fetchRaces } from '../actions';

class RaceList extends React.Component {

    componentDidMount(){
        this.props.fetchRaces();
    }
    renderList() {
        return this.props.races.map(race => {
            return (
                <div className="item" key={race.round}>
                   <h4>Race: {race.raceName}
                   <small>
<h5>Circit Name: {race.Circuit.circuitName} </h5>
                   <h5>{race.Circuit.Location.country}</h5>
                   </small>
                   
                   <br></br>   </h4>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">               
                    <h2>F1 Races:</h2>
                    <ul class="namelist">
                        {this.renderList()}
                    </ul>
                </div>
                <div className="col-7"></div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return { races: state.races };
}

export default connect(mapStateToProps, {fetchRaces})(RaceList);