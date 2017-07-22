import React from "react";

export default class Whisky extends React.Component {
  render() {
    const {title} = this.props;
    const {description} = this.props;

    return (
      <div class="col-md-9">
        <h4>{title}</h4>
        <p>{description}</p>
        <a class="btn btn-default">In Warenkorb</a>
      </div>
    );
  }
}

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.