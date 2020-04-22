const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('industries', '/industries/:slug')
routes.add('widget', '/widget/:slug')