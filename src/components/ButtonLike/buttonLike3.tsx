import * as React from "react";
import './buttonLike3.modules.scss';

export class ButtonLike3 extends React.Component {

  state = {
    hasLiked: false,
    hasDisliked: false,
    like: 100,
    disLike: 25
  }

  handleLike = () => {
    if (!this.state.hasDisliked) {
      this.setState({
        hasLiked: !this.state.hasLiked
      });
    } else {
      this.setState({
        hasLiked: true,
        hasDisliked: false
      });
    }
  }

  handleDislike = () => {
    if (!this.state.hasLiked) {
      this.setState({
        hasDisliked: !this.state.hasDisliked
      });
    } else {
      this.setState({
        hasLiked: false,
        hasDisliked: true
      });
    }
  }

  render() {
    const { hasLiked, hasDisliked } = this.state;
    const classLikeButton = `like-button ${hasLiked ? 'liked' : ''}`;
    const classDisLikeButton = `dislike-button ${hasDisliked ? 'disliked' : ''}`;

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
          <button className={classDisLikeButton} onClick={this.handleDislike}>
            Dislike |
            <span> </span>
            <span className="dislikes-counter">
              {this.state.hasDisliked ? this.state.disLike + 1 : this.state.disLike}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

