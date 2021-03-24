import React from 'react';
import { connect } from 'react-redux';
import { fetchWinners } from '../actions';

class Winners extends React.Component {

    componentDidMount(){
        this.props.fetchWinners();
    }
    renderList() {
        return this.props.winners.map(StandingsTable => {
            return (
                <div className="item" key={StandingsTable.DriverStandings}>
                   <div>Hej</div>
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