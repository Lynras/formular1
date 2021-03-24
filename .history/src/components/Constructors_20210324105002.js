import React from 'react';
import { connect } from 'react-redux';
import { fetchRaces } from '../actions';

class RaceList extends React.Component {

    componentDidMount(){
        this.props.fetchConstructors();
    }
    renderList() {
        return this.props.Constructor.map(Constructor => {
            return (
                <div className="item" key={Constructor.maker}>
                   
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
    return { maker: state.maker };
}

export default connect(mapStateToProps, {fetchRaces})(RaceList);