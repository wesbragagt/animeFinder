import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.text){
            alert('please search for an anime');
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
            </div>
        );
    }
}

export default Search;
