import React, {PropTypes} from 'react';

export default class ToggleButton extends React.Component {
    static propTypes = {
        isOn: PropTypes.bool.isRequired,
        onText: PropTypes.string.isRequired,
        offText: PropTypes.string.isRequired,
        onToggle: PropTypes.func.isRequired
    };
   
    handleClick = (e) => {
        const {isOn, onToggle} = this.props;
        onToggle(!isOn);
    }

    render() {
        const {isOn, onText, offText} = this.props;

        return (
            <div>
                <button onClick={this.handleClick}>{isOn ? offText : onText}</button>
            </div> 
        );
    }
}