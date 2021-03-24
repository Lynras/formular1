import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';

class Winners extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.winner.map(winners => {
            return (
                <div className="item" key={winners.driverStandingsId}>
                   <h4>Winner: {winners.driverId}</h4>
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
    return { winner: state.winner };
}

export default connect(mapStateToProps, {fetchWinners})(Winners);