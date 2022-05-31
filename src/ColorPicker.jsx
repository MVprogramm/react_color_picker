import React from 'react';

import './colorPicker.scss';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorTitle: ''
    }
  }

  setColorTitle(color) {
    this.setState({
      colorTitle: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorTitle}</div>
        <div>
          <button 
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setColorTitle('CORAL')}
            onMouseOut={() => this.setColorTitle('')}
          ></button>
          <button 
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setColorTitle('AQUA')}
            onMouseOut={() => this.setColorTitle('')}
          ></button>
          <button 
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setColorTitle('BISQUE')}
            onMouseOut={() => this.setColorTitle('')}
          ></button>
        </div>
      </div>
    )
  }
};

export default ColorPicker;

