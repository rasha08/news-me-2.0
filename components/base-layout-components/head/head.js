import Head from 'next/head'

const CustomHead = (props) => 
  <Head>
    <title>{props.title || 'KITA POZDRAV'}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="/static/css/css.css" />
  </Head>

export default CustomHead