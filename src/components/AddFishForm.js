import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      status: "unavailable",
      desc: "",
      image: ""
    };
  }

  static propTypes = {
    addFish: PropTypes.func
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  createFish = event => {
    event.preventDefault();

    const fish = {
      name: this.state.name,
      price: parseFloat(this.state.price),
      status: this.state.status,
      desc: this.state.desc,
      image: this.state.image
    };
    this.props.addFish(fish);
    this.setState({
      name: "",
      price: "",
      status: "unavailable",
      desc: "",
      image: ""
    });
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          value={this.state.price}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          value={this.state.status}
          onChange={this.handleInputChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.state.desc}
          onChange={this.handleInputChange}
          placeholder="Desc"
        />
        <input
          name="image"
          value={this.state.image}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
