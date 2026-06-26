import CountdownTimer from '../components/CountdownTimer.jsx'
import { rsvpUrl } from '../siteData.js'

function WelcomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <iframe
            title="Wedding background video"
            src="https://player.vimeo.com/video/1138643504?background=1&autoplay=1&loop=1&muted=1&playsinline=1"
            allow="autoplay; fullscreen; picture-in-picture"
            className="hero-video"
          />
        </div>

        <div className="hero-overlay">
          <div className="hero-copy-inner hero-copy-inner--names">
            <h1 className="couple-names">Jennifer Luong</h1>
            <p className="hero-ampersand">&amp;</p>
            <h1 className="couple-names">Brian Nguyen</h1>
          </div>
        </div>
      </section>

      <section className="welcome-details-section">
        <div className="section-panel centered welcome-details-panel">
          <h2 className="hero-date-title">Saturday, December 19, 2026</h2>
          <p className="hero-location">Orange County, California</p>
          <CountdownTimer />
          <div className="hero-actions">
            <a className="hero-action-link" href={rsvpUrl} target="_blank" rel="noreferrer">
              RSVP
            </a>
          </div>
          <p className="hero-details">
            We are delighted to welcome you and feel deeply honored to celebrate this beautiful occasion with you!
          </p>
        </div>
      </section>
    </>
  )
}

export default WelcomePage