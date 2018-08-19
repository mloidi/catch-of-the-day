import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };
  handleInputChange = event => {
    const updateFish = {
      ...this.props.fish,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    };

    this.props.updateFish(this.props.index, updateFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          value={this.props.fish.name}
          type="text"
          onChange={this.handleInputChange}
        />
        <input
          name="price"
          value={this.props.fish.price}
          type="text"
          onChange={this.handleInputChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleInputChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleInputChange}
        />
        <input
          name="image"
          value={this.props.fish.image}
          type="text"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
