import * as React from "react";
import './buttonLike3.modules.scss';

export class ButtonLike3 extends React.Component {
  state = {
    hasLiked: false,
    like: 100,
  }

  handleLike = () => {
    this.setState({
      hasLiked: !this.state.hasLiked
    });
  }

  render() {
    const { hasLiked } = this.state;
    const classLikeButton = `like-button ${hasLiked ? 'liked' : ''}`;

    return (
      <div className="container">
        <div className="sub-container">
          <button className={classLikeButton} onClick={this.handleLike}>
            Like |
            <span> </span>
            <span className="likes-counter">
              {this.state.hasLiked ? this.state.like + 1 : this.state.like}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

