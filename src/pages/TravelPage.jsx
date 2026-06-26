import PageHero from '../components/PageHero.jsx'

function TravelPage() {
  return (
    <>
      <PageHero
        kicker="Travel"
        title="Planning your trip"
        intro="For out-of-town guests, these notes should make the weekend logistics easier."
      />

      <section className="page-section travel-section">
        <div className="section-panel centered">
          <div className="travel-grid">
            <article className="info-card">
              <h3>Arrival</h3>
              <p>We recommend flying into Burbank if possible, with LAX as the best alternative for wider flight options.</p>
            </article>
            <article className="travel-note">
              <h3>Getting Around</h3>
              <p>Parking will be available at the venue, and rideshare drop-off is straightforward if you prefer not to drive.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default TravelPage