import React, {Component} from 'react'

class NewTweet extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.event.value

        this.setState(() => {
            text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {text} = this.state
        console.log('New Tweet: ', text)

        this.state(() => {
            text : ''
        })
    }

    render() {
        const {text} = this.state
        const tweetLeft = 280 - text.length
        //TODO redirect to HOME VIEW if submitted
        return (
            <div>
                <h3 className="center">Compose new Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}>
                        Submit
                    </button>

                </form>

            </div>
        )
    }
}

export default NewTweet
