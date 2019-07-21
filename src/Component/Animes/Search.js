import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        text: PropTypes.string,
        searchAnimes: PropTypes.func,
        clearAnimes: PropTypes.func,
        showClear: PropTypes.bool,
        setAlert: PropTypes.func,
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.text){
            this.props.setAlert('Please enter an anime title. Example: Dragon Ball Z', 'light');
        }
            else {
                this.props.searchAnimes(this.state.text);
                    this.setState({
                        text: ''
                    })
            }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text" placeholder="search for an anime" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>

                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearAnimes}>Clear</button>}
            </div>
        );
    }
}

export default Search;
