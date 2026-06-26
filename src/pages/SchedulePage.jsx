import { Link } from 'react-router-dom'
import { scheduleItems } from '../siteData.js'

function SchedulePage() {
  return (
    <>
      <section className="page-hero schedule-hero">
        <div className="section-panel">
          <h1 className="section-title">Schedule</h1>
        </div>
      </section>

      <section className="page-section story-section schedule-section">
        <div className="section-panel schedule-panel">
          <p className="schedule-date">Saturday, December 19, 2026</p>

          <div className="schedule-timeline">
            {scheduleItems.map((item) => (
              <article className="schedule-item" key={`${item.startTime}-${item.title}`}>
                <div className="schedule-marker" aria-hidden="true" />
                <div className="schedule-content">
                  <p className="schedule-time">
                    {item.startTime} to {item.endTime}
                  </p>
                  <h3>
                    {item.title} - {item.venue}
                  </h3>
                  <p className="schedule-address">{item.address}</p>
                  <p>{item.text}</p>
                  {item.detail ? <p className="schedule-detail">{item.detail}</p> : null}

                  <div className="schedule-actions">
                    <span>Add to Calendar</span>
                    <Link to="/where-to-stay">Where to Stay</Link>
                    <Link to="/travel">Directions</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SchedulePage