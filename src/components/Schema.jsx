import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

/* schema.org */
script ={[
    {
        type="application/ld+json",
        innerHTML:(JSON.stringify({
        "@context": "http://schema.org/",
        })),
    },
]}