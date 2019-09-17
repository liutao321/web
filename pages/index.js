import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

export default class Index extends React.Component {
    static async getInitialProps () {
      // eslint-disable-next-line no-undef
      const res = await fetch('http://129.226.132.86:8888/')
      console.log('success')
      console.log(res)
      return { stars: res }
    }
  
    render () {
      return (
        <div>
          <p>Next.js has ⭐️</p>
        </div>
      )
    }
  }