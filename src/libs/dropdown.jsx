import React from "react";

function TextBanner(props) {
  if (!props.text) {
    return null;
  }
  return (
    <div>
      <div className="container__feat--list">
        <FeatList data={props.data} />
      </div>
    </div>
  );
}
function FeatList(props) {
  return props.data.map((item) => {
    return <li>{item}</li>;
  });
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState((state) => ({
      showText: !state.showText,
    }));
  }

  render() {
    return (
      <div className="container__feat">
        <button
          className={"container__feat--button"}
          onClick={this.handleToggleClick}
        >
          <div className={"container__feat--title"}>
            <div>
              <h3 className={"container__feat--h3"}>{this.props.title}</h3>
            </div>
            {this.state.showText ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
        </button>

        <TextBanner
          text={this.state.showText}
          description={this.props.description}
          data={this.props.data}
        />
      </div>
    );
  }
}
export { Dropdown };
