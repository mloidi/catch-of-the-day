import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myInput: getFunName() };
  }
  static propTypes = {
    history: PropTypes.object
  };

  handleChange = event => {
    this.setState({ myInput: event.target.value });
  };

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.state.myInput;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          value={this.state.myInput}
          onChange={this.handleChange}
          required
          placeholder="Store Name"
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
