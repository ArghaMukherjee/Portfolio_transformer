function Testimonials() {
    const testimonials = [
        {
            quote: "Argha's expertise in AI/ML is exceptional. His ability to translate complex technical concepts into business value is rare and invaluable.",
            author: "Senior Director",
            company: "Healthcare Tech Company",
        },
        {
            quote: "Working with Argha on the CMU collaboration was inspiring. His technical leadership and vision drove the project to success.",
            author: "Project Lead",
            company: "Carnegie Mellon University",
        },
        {
            quote: "Argha brings a unique blend of technical depth and strategic thinking. His contributions to our NLP initiatives were transformative.",
            author: "AI Research Lead",
            company: "IBM Watson Health",
        },
    ];

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Testimonials</span>
                    <h2 className="section-title">What People Say</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <span className="author-name">{testimonial.author}</span>
                                    <span className="author-company">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
