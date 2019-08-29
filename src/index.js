import React from "react";
import './index.css';

class TwitterHeart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLiked: props.isLiked
    }
    this.likeClicked = this.likeClicked.bind(this);
  }

  likeClicked(){
    this.setState({isLiked: !this.state.isLiked});
    if(!!this.props.onHeartClick){
      this.props.onHeartClick();
    }
  }

  render(){
    const {isLiked} = this.state;
    const likeClass = isLiked ? 'is-active': '';
    return (
    <div className="stage">
      <div className={`heart ${likeClass}`} onClick={this.likeClicked}></div>
    </div>
  );
  }
}

export default TwitterHeart;