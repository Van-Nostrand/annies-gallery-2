import React, {Component} from "react";

class Details extends Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 0
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(e){
    e.preventDefault();
    let x = this.state.quantity;
    if(x > 0){
      this.setState({quantity: --x});
    }
  }

  handleIncrement(e){
    e.preventDefault();
    let x = this.state.quantity;
    this.setState({quantity: ++x});
  }

  render(){
    return(
      <div id="detail-container">
        <div id="image-div">
          <img id="fullsize-img" src={this.props.subject.imgUrl} />
        </div>
        <div id="info-div">
          <div id="art-title">{this.props.subject.name}</div>
          <div id="medium">{this.props.subject.medium}</div>
          <div id="date-div">{this.props.subject.date}</div>
          <div id="description">{this.props.subject.description}</div>
          <div id="add-cart-form">
            <button id="decrement-btn" onClick={this.handleDecrement}>-</button>
            <span id="quantity-span">{this.state.quantity}</span>
            <button id="increment-btn" onClick={this.handleIncrement}>+</button>
            <button id="purchase" onClick={() => this.props.addToCart(this.state.quantity)}>add to cart</button>
          </div>
        </div>
      </div>
    );
  };
};

export default Details;
