import React, {Component} from "react";
import {connect} from "react-redux"
import {formatTweet, formatDate} from '../utils/helpers'
import {TiArrowBackOutline, TiHeartFullOutline, TiHeartOutline} from "react-icons/ti/index";

class Tweet extends Component {
    toParent = (e, id) => {
        e.preventDefault()
        //TODO redirect to parent tweet
    }

    handleLike = (e) => {
        e.preventDefault()
        //TODO handle like the tweet
    }

    render() {
        const {tweet} = this.props
        if (tweet === null) {
            return <p>This Tweet doesn't exists</p>
        }
        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, id,  parent
        } = tweet

        return (
            <div className="tweet">
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon'/>
                        <span>{replies !== 0 && replies}</span>
                        <button className="heart-button" onClick={this.handleLike}>
                            {hasLiked === true ? <TiHeartFullOutline color='#e0245e' className="tweet-icon"/> :
                                <TiHeartOutline className="tweet-icon"/>}
                        </button>
                        <span>{likes !== 0 && likes}</span>

                    </div>
                </div>
            </div>
        )
    }
}

//the second argument is the prop passed to the component that we want to use in our map function
function mapStateToProps({tweets, authedUser, users}, {id}) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }

}

export default connect(mapStateToProps)(Tweet)
