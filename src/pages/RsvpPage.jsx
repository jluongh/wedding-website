import PageHero from '../components/PageHero.jsx'
import { rsvpUrl } from '../siteData.js'

function RsvpPage() {
  return (
    <>
      <PageHero
        kicker="RSVP"
        title="We can&apos;t wait to celebrate with you"
        intro="Please use our WithJoy RSVP page to respond, select your meal, and share any updates before September 12, 2026."
      />

      <section className="page-section">
        <div className="section-panel centered">
          <div className="hero-actions">
            <a className="hero-action-link" href={rsvpUrl} target="_blank" rel="noreferrer">
              Open RSVP Page
            </a>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <h3>Deadline</h3>
              <p>Please submit your response by September 12, 2026.</p>
            </article>
            <article className="info-card">
              <h3>Meal Selection</h3>
              <p>You&apos;ll be able to note dietary restrictions and entree preferences with your RSVP.</p>
            </article>
            <article className="info-card">
              <h3>Contact</h3>
              <p>If anything changes after you respond, reach out so we can keep the guest list accurate.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default RsvpPage