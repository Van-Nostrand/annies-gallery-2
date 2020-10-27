import React, { Component } from "react";
import Axios from 'axios';

import About from "./About";
import Contact from "./Contact";
import Details from "./Details";
import GalleryNavbarGrid from "./GalleryNavbarGrid";
import ImageGallery from "./ImageGallery";
import Shop from "./Shop";

const IMAGE_PREFIX = "./";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      cart: [],
      currentPage: "works"
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.getMousePosition = this.getMousePosition.bind(this);
  };

  handleMouseOver(e){
    // console.log(`mouse over ${e.target}`);
  }

  handleMouseOut(e){
    // console.log(`mouse out ${e.target}`);
  }

  handleSelection(page){
    this.setState({currentPage: page});
  }

  handleAddToCart(data){
    let newCartItem = {
      item: this.state.currentPage.split(":")[1],
      quantity: data
    }

    this.setState({cart: [...this.state.cart, newCartItem]});
  }

  getMousePosition(e){
    // // console.log(`e.clientY: ${e.clientY} e.clientX: ${e.clientX} e.target.offsetTop: ${e.target.offsetTop} e.target.offsetLeft: ${e.target.offsetLeft}`);
    // console.log(`mouse at (${e.clientX - e.target.offsetLeft}, ${e.clientY - e.target.offsetTop})`);
  }

  componentDidMount(){
    Axios.get("")
  }

  render(){
    let page;
    switch(this.state.currentPage.split(":")[0]){
      case "works":
        page = <ImageGallery selectWork={this.handleSelection} artData={this.state.artData} />;
        break;
      case "about":
        page = <About data={this.state.pageData["about"]}/>;
        break;
      case "shop":
        page = <Shop />;
        break;
      case "contact":
        page = <Contact />;
        break;
      case "details":
        let selected = {
          ...this.state.artData.filter((art) => art.name === this.state.currentPage.split(":")[1])[0]
        };
        page = <Details subject={selected} addToCart={this.handleAddToCart}/>
        break;
      default: page = <div>PLACEHOLDER</div>;
    }

    return(
      <div id="gallery-div">
        <GalleryNavbarGrid navHeight={this.state.navBarSize} currentPage={this.state.currentPage} handleSelection={this.handleSelection} />
        {page}
      </div>
    );
  };
};

export default App;
