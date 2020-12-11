import React from 'react'
import { graphl, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.css'
import gitLogo from './gitlogo.png'
import linklog from './linkedlogo.png'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
                    <div className={footerStyles.icons}>
            <a href="https://github.com/TimdinanCSUF">
            <img className={footerStyles.icon} src={gitLogo} alt="gitLogo" />
            </a>
            <a href="https://www.linkedin.com/in/timothy-dinan/">
            <img className={footerStyles.icon} src={linklog} alt="linkLogo" />

            </a>

            </div>
            <p>Created by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    )
}

export default Footer
