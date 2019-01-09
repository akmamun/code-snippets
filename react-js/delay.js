//install prop-types
import React from 'react';
import PropTypes from 'prop-types';

class Delay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

Delay.propTypes = {
    waitBeforeShow: PropTypes.number.isRequired
};

export default Delay;

// Example Call where want to use it
<Delay waitBeforeShow={1000}> // delay time
   {images10}
</Delay>
