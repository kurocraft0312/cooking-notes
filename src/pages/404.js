import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h2>ページが見つかりません…</h2>
          <p>該当のページは消してしまったか、元からなかったか…いずれにせよ、現在当サイトには存在しないのでページの閲覧は諦めましょう。</p>
          <Link to="/">→トップページへ戻る</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
