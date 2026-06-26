import PageHero from '../components/PageHero.jsx'
import { storyColumns } from '../siteData.js'

function OurStoryPage() {
  return (
    <>
      <PageHero
        kicker="Our Story"
        title="How it all started"
        intro="A dating app, one bold opener, and a first date that felt unexpectedly easy."
      />

      <section className="page-section story-section">
        <div className="section-panel">
          <div className="story-grid">
            {storyColumns.map((column) => (
              <article className="story-card" key={column.title}>
                <h3>{column.title}</h3>
                {column.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStoryPage