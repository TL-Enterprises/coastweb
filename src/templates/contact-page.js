/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import { Helmet } from "react-helmet"
export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    } 
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
<Helmet>
  <body className="contact-page" />
</Helmet>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper fluff">
        <br /><br />
        <h1 style={{fontSize:'130%'}}>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>

        <div className="wrapper">
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ filter:'drop-shadow(0px 0px 10px #0064bb)'}}>
            <label>
              <input type="text" name="name" placeholder="your name" required />
            </label>
          </p>
          <p style={{ filter:'drop-shadow(0px 0px 10px #0064bb)'}}>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </p>
          <p>
            <label>
              <input type="hidden" name="subject" placeholder="Subject" value="Coast Web Form Post" />
            </label>
          </p>
          <p style={{ filter:'drop-shadow(0px 0px 10px #0064bb)'}}>
            <label>
              <textarea name="message" placeholder="your message" required></textarea>
            </label>
          </p>
          <p className="text-align-right" style={{marginRight:'60px', color:'#fff'}}>
            <button
              className="button"
              
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
      <br />
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
