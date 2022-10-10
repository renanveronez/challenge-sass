// import cx from 'classnames';
import { Component } from 'react';

export default class ButtonLike2 extends Component {
  state = {
    hasLiked: false,
    hasDisliked: false,
    like: 100,
  }

  handleLike = () => {
    if (!this.state.hasDisliked) {
      this.setState({
        hasLiked: !this.state.hasLiked
      });
    } else {
      this.setState({
        hasLiked: true,
      });
    }
  }

  render() {
    const { hasLiked } = this.state;
    const classLikeButton = `like2-button ${hasLiked ? 'liked2' : ''}`;

    return (
      <>
        <div>
          <button className={classLikeButton} onClick={this.handleLike}>
            Like |
            <span> </span>
            <span className="likes2-counter">
              {this.state.hasLiked ? this.state.like + 1 : this.state.like}
            </span>
          </button>
        </div>
        <style>{`
                    .like2-button {
                        font-size: 3rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked2 {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>

      </>
    );
  }
}
