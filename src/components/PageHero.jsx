function PageHero({ kicker, title, intro }) {
  return (
    <section className="page-hero">
      <div className="section-panel">
        <span className="section-kicker">{kicker}</span>
        <h1 className="section-title">{title}</h1>
        <p className="section-intro">{intro}</p>
      </div>
    </section>
  )
}

export default PageHero