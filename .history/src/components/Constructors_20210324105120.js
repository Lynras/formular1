import React from 'react';
import { connect } from 'react-redux';
import { fetchConstructors } from '../actions';

class RaceList extends React.Component {

    componentDidMount(){
        this.props.fetchConstructors();
    }
    renderList() {
        return this.props.Constructors.map(Constructor => {
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
    return { Constructors: state.Constructors };
}

export default connect(mapStateToProps, {fetchConstructors})(Constructor);