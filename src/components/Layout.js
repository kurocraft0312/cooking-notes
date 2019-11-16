import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* OGP利用宣言 */}
        <head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#" />
        {/* BASIC */}
        <meta name="description" content={description} />
        <meta name="keywords" content="自炊,自炊 初心者,自炊 初めて" />
        <meta name="author" content="kurocraft0312" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        {/* Web Clip(Retina対応) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        {/* 用途不明 */}
        <meta name="theme-color" content="#fff" />
        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="初めての自炊" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="当サイトは、一人暮らし＆自炊初心者向けの料理サイトです。実際の料理レシピはもちろん、買い物の仕方・食品の保存方法・時短テクニックなど。 自炊に役立つ情報をまとめていきます。" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        <meta property="og:local" content="ja_JP" />
        {/* <meta property="fb:app_id" content="APP-ID（15文字）" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kurocraft7522" />
        <meta name="twitter:image" content="OGP画像のURL" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper