import React, {PropTypes} from 'react';

const MESSAGES = {
    welcome: (<span>Welcome! <br/> You have logged in!!</span>), 
    goodbye: (<span>Goodbye! <br/> See you Soon Again!!</span>)
};

export default class MessageBoard extends React.PureComponent {
    static propsType = {
        message : PropTypes.string.isRequired
    }
    
    render() {
        const {message} = this.props;

        return (
            <div>
                {MESSAGES[message]}
            </div>
        );
    }
}