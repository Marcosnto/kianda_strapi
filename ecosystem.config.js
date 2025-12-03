module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/home/ubuntu/strapi",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
