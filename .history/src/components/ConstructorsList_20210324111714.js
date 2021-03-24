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
                            Constructor Name: {constructor.name} <br></br>
                            Constructor Nationality:{constructor.nationality} <br></br>
                            <Route path='/privacy-policy' component={() => { 
                            window.location.href = 'https://example.com/1234'; 
                            return null; }/>
                            Read More:  Wikipedia Page
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