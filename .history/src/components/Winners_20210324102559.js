import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';

class Winners extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.winners.map(driver => {
            return (
                <div className="item" key={StandingsTable.DriverStandings}>
                   <ul>
                    <li className="item" key={driver.driverId}>
                   <h4>{driver.givenName} {driver.familyName}
                   <small> Born: {driver.dateOfBirth}, {driver.nationality}</small></h4>    
                </li>
                </ul>
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { winners: state.winners };
}

export default connect(mapStateToProps, {fetchWinners})(Winners);