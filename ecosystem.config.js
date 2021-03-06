module.exports = {
	apps: [
		{
			name: "video",
			script: "npx next start -p 80",
			instances: 1,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "development",
				ENV_NAME: "development"
			},
			env_production: {
				NODE_ENV: "production",
				ENV_NAME: "online"
			}
		}
	]
};
