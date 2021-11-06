module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  mmf: {
    name: 'mmf',    
    connector: 'mysql',
    host: process.env.DB_HOST? process.env.DB_HOST: "127.0.0.1",
    port: process.env.DB_PORT? process.env.DB_PORT: 3306,
    user: process.env.DB_USER? process.env.DB_USER: "proxyuser",
    password: process.env.DB_PASSWORD? process.env.DB_PASSWORD: "srstee",
    database: process.env.DB_DATABASE? process.env.DB_DATABASE: "srstee",
    insecureAuth: true,
    connectionLimit: 10
  }
}