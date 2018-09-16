import React from 'react';
import './NewComment.css'

export class NewComment extends React.Component {
    state = {
        messge: ''
    }

    handleChange = e => {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addComment(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type={'text'}
                    name='message'
                    placeholder='You can type your comment here'
                    value={this.state.message}
                    onChange={this.handleChange}
                    />
            </form>
        )
    }
}

export default NewComment;

