export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.hostinger.com"),
        port: env.int("SMTP_PORT", 465),
        secure: true,
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: "naoresponder@kiandadiversidade.com",
        defaultReplyTo: "contato@kiandadiversidade.com",
      },
    },
  },
  "users-permissions": {
    config: {
      email: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "smtp.hostinger.com"),
          port: env.int("SMTP_PORT", 465),
          secure: true,
          auth: {
            user: env("SMTP_USERNAME"),
            pass: env("SMTP_PASSWORD"),
          },
        },
        settings: {
          defaultFrom: "naoresponder@kiandadiversidade.com",
          defaultReplyTo: "contato@kiandadiversidade.com",
        },
        emailTemplates: {
          resetPassword: {
            subject: "Redefinir sua senha - Kianda Diversidade",
            text: "Olá! Clique no link para redefinir sua senha: <%= URL %>?code=<%= TOKEN %>",
            html: `
              <h1>Redefinir sua senha</h1>
              <p>Olá!</p>
              <p>Clique no link abaixo para redefinir sua senha:</p>
              <a href="<%= URL %>?code=<%= TOKEN %>">Redefinir senha</a>
              <p>Se você não solicitou esta redefinição, ignore este email.</p>
            `,
          },
        },
      },
    },
  },
});
