 module.exports = {
  apps : [
        {
        name: "news-me",
        script: "./server.js",
        watch: true,
        env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
        env_production: {
                "PORT": 1121,
                "NODE_ENV": "production",
            }
        }
    ]
}