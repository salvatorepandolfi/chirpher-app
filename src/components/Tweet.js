import React, {Component} from "react";
import {connect} from "react-redux"
import {formatTweet} from '../utils/helpers'

class Tweet extends Component {
    render() {
        console.log(this.props.tweet)
        return (
            <div  className="tweet">
                {this.props.id}
            </div>
        )
    }
}

//the second argument is the prop passed to the component that we want to use in our map function
function mapStateToProps({tweets, authedUser, users}, {id}) {
    const tweet = tweets[id]
    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser)
    }

}

export default connect(mapStateToProps)(Tweet)
