import PageHero from '../components/PageHero.jsx'
import { faqItems } from '../siteData.js'

function QaPage() {
  return (
    <>
      <PageHero
        kicker="Q&A"
        title="A few quick answers"
        intro="We&apos;ll keep this updated as common questions come up."
      />

      <section className="page-section">
        <div className="section-panel centered">
          <div className="faq-list">
            {faqItems.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default QaPage