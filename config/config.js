const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "123Secret",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://admin:admin123@ds133241.mlab.com:' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '33241') +
    '/market'
}

export default config
