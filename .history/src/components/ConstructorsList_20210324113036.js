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
                           <h4> Constructor Name: {constructor.name} <br></br>
                           <small> Constructor Nationality: {constructor.nationality} <br></br>
                            Read More: <a href={constructor.url} target="_blank"> Wikipedia Page</a> </small>
                            </h4>
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
    return { constructors: state.constructors };
}

export default connect(mapStateToProps, {fetchConstructors})(ConstructorsList);