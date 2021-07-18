import React from 'react'

const NewsletterMessage = () => {
    return (
        <div className="news-letter">
            <div className="newsletter-header">
                <h3>Do you want to subscribe to our news letter ?</h3>
            </div>
            <div className="newsletter-body">
                <button className="newsletter-btn">Yes</button>
                <button className="newsletter-btn">Not really</button>
            </div>
        </div>
    )
}

export default NewsletterMessage
