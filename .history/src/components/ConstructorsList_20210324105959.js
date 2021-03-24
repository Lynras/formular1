import React from 'react';
import { connect } from 'react-redux';
import { fetchConstructors } from '../actions';

class ConstructorsList extends React.Component {

    componentDidMount(){
        this.props.fetchConstructors();
    }
    renderList() {
        return this.props.Constructors.map(constructor => {
            return (
                <div className="item" key={constructor.constructorid}>
                   <div>{constructor.constructorId}</div>
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

export default connect(mapStateToProps, {fetchConstructors})(ConstructorsList);