# Annies gallery 2
my second attempt


 // options: {
            //   sassOptions: {
            //     file: "src/sass/main.scss",
            //     outFile: "public/style.css"
            //   }
            // }

ran into some weird issues with webpack and react router.
webpack.config needs the following:

module.exports = {
  output: {
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  }
}

AND, for some reason, the root level route needs to have path specified as exact
<Route exact path="/">

now the router works.

Feb 8 - reopened this and don't remember what I was working on... 

SIMPLIFY
This looks bad
simplify it


martinandI-draft1 background is #333333ff

Things I need to understand
* declaring modules
* * what is a module
* types
* interfaces
* svg support?