import React, {Component} from "react";
import {connect} from "react-redux"
import {formatTweet} from '../utils/helpers'

class Tweet extends Component {
    render() {
        const {tweet} = this.props
        if(tweet === null) {
            return <p>This Tweet doesn't exists</p>
        }
        console.log(this.props)
        return (
            <div className="tweet">
                {this.props.id}
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
