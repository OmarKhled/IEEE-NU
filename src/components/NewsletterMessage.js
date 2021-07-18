import React from 'react'

const NewsletterMessage = ({ remove }) => {
    const turnOff = () => {
        localStorage.setItem('revealPop', 'off')
        remove()
    }
    const agree = () => {
        alert('This section is still under development')
        localStorage.setItem('revealPop', 'off')
        remove()
    }
    return (
        <div className="news-letter">
            <div className="newsletter-header">
                <h3>Do you want to subscribe to our news letter ?</h3>
            </div>
            <div className="newsletter-body">
                <button className="newsletter-btn" onClick={agree}>Yes</button>
                <button className="newsletter-btn" onClick={turnOff}>Not really...</button>
            </div>
        </div>
    )
}

export default NewsletterMessage
