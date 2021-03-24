import React from 'react';
import { connect } from 'react-redux';
import { fetchConstructors } from '../actions';

class ConstructorsList extends React.Component {

    componentDidMount(){
        this.props.fetchConstructors();
    }
    renderList() {
        return this.props.constructors.map(constructor => {
            return (
                <div className="item" key={constructor.constructorid}>
                   <ul>
                       <li>
                       {constructor.name} <br></br>
                            {constructor.nationality}
                       </li>
                   </ul>
                  
                   

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
    return { constructors: state.constructors };
}

export default connect(mapStateToProps, {fetchConstructors})(ConstructorsList);