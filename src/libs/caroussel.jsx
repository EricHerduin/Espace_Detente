import React from "react";

function ButtonPrevious(props) {
  return (
    <button
      className="container__prez--image--btn-previous"
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
}
function ButtonNext(props) {
  return (
    <button
      className="container__prez--image--btn-next"
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  );
}

function IndexPage(props) {
  return (
    <p className="container__prez--image--indexpage">
      <span className="container__prez--image--indexpage-pict">
        {props.pict}
      </span>
      <span>/</span>
      <span className="container__prez--image--indexpage-nbpict">
        {props.nbpict}
      </span>
    </p>
  );
}

class Caroussel extends React.Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.state = {
      pict: 0,
      nbpict: this.props.nbpict.length,
    };
  }

  handleNextClick() {
    this.setState({ pict: this.state.pict + 1 });
  }

  handlePreviousClick() {
    this.setState({ pict: this.state.pict - 1 });
  }

  render() {
    if (this.state.pict > this.state.nbpict - 1) {
      this.setState({ pict: 0 });
    } else if (this.state.pict < 0) {
      this.setState({ pict: this.state.nbpict - 1 });
    }
    return (
      <div className="container__prez--image--gallery">
        <img
          src={this.props.data[this.state.pict]}
          alt=""
          className="container__prez--image-main"
        />
        <div className="container__prez--image--btn">
          <ButtonPrevious onClick={this.handlePreviousClick} />
          <IndexPage
            pict={this.state.pict + 1}
            nbpict={this.props.nbpict.length}
          />
          <ButtonNext onClick={this.handleNextClick} />
        </div>
      </div>
    );
  }
}
export { Caroussel };
