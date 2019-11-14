import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>お問い合わせ</h2>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'contacttype'}>
                    お問い合わせ内容をお選びください
                  </label>
                  <div className="control">
                    <select name={'selecttype'} className={'select'} required={true}>
                      <option value={'お仕事のご依頼やご相談'}>お仕事のご依頼やご相談</option>
                      <option value={'コラボレーションやイベントのお誘い'}>コラボレーションやイベントのお誘い</option>
                      <option value={'その他'}>その他</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'company'}>
                    所属する会社名をご入力ください
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'companyname'}
                      placeholder={'例）◯△株式会社'}
                      onChange={this.handleChange}
                      id={'companyname'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    担当者様のお名前をご入力ください
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      placeholder={'例）山田　太郎'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    ご連絡先のメールアドレスをご入力ください
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      placeholder={'例）yamada@gmail.com'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'tel'}>
                    ご連絡先のお電話番号をご入力ください
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'tel'}
                      name={'tel'}
                      placeholder={'例）000-0000-0000'}
                      onChange={this.handleChange}
                      id={'tel'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    ご質問・ご不明点・ご相談内容の詳細・その他事前にお伝えしておきたい事柄などをご入力ください
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      placeholder={'例）弊社の製品をお試し頂きたく、ご連絡いたしました。'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field submitbutton">
                  <button className="button is-link" type="submit">
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
