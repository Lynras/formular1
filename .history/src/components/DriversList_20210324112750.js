import React from 'react';
import { connect } from 'react-redux';
import { fetchDrivers } from '../actions';


class DriverList extends React.Component {
    componentDidMount(){
        this.props.fetchDrivers();
    }

    renderList() {
        return this.props.drivers.map(driver => {
            return (
                <ul>
                    <li className="item" key={driver.driverId}>
                   <h4>{driver.givenName} {driver.familyName} <br></br>
                   <small> Born: {driver.dateOfBirth}, Nationality: {driver.nationality}</small></h4>    
                </li>
                </ul>
                
            )
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">               
                    <h1>F1 Drivers:</h1>
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
    return { drivers: state.drivers };
}
export default connect(mapStateToProps, {fetchDrivers})(DriverList);

