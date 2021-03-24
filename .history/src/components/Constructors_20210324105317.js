import React from 'react';
import { connect } from 'react-redux';
import { fetchConstructors } from '../actions';

class Constructor extends React.Component {

    componentDidMount(){
        this.props.fetchConstructors();
    }
    renderList() {
        return this.props.Constructors.map(Constructor => {
            return (
                <div className="item" key={Constructor.Constructors}>
                   <div>Hej</div>
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