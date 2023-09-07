import faqs from './data'
import FAQ from './Faq'
import './faq.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually encounter. If you have any more queries please don't hesitate to send me a message using any of the links in the contact section!
      </p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs