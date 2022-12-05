import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: '이찬우의 Next.js Blog',
    description: 'Next.js 포트폴리오 블로그',
    image: '/images/22313.png'
  }

  return (
    <Html lang="ko">
      <Head>
        <title>Aldrich's blog</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="title"/>
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
