const React = require('react')
const Layout = require('./src/components/layout').default
require('./src/styles/global.css')

exports.wrapRootElement = ({element})=>(
  <Layout>
    {element}
  </Layout>
)