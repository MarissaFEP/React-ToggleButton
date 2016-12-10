import React, {PropTypes, PureComponent} from 'react';

export default class ToggleButton extends PureComponent {
    static propTypes = {
        isOn: PropTypes.bool.isRequired,
        onMessage: PropTypes.any.isRequired,
        offMessage: PropTypes.any.isRequired,
        onToggle: PropTypes.func.isRequired
    };
   
    handleClick = (e) => {
        const {isOn, onToggle} = this.props;
        onToggle(!isOn);
    }

    render() {
        const {isOn, onMessage, offMessage} = this.props;

        return (
            <div>
                <button onClick={this.handleClick}>{isOn ? offMessage : onMessage}</button>
            </div> 
        );
    }
}