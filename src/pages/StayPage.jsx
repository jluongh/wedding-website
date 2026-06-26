import PageHero from '../components/PageHero.jsx'
import { stayCards } from '../siteData.js'

function StayPage() {
  return (
    <>
      <PageHero
        kicker="Where to Stay"
        title="A few easy options nearby"
        intro="We recommend staying close to the venue so the weekend stays simple and relaxed."
      />

      <section className="page-section">
        <div className="section-panel centered">
          <div className="info-grid">
            {stayCards.map((card) => (
              <article className="info-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default StayPage