import type { StrapiApp } from "@strapi/strapi/admin";
import Logo from "./extensions/kianda_logo.svg";
import LogoSmall from "./extensions/logo_small.png";
import FavIcon from "./extensions/fav-icon.png";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: FavIcon,
    },

    locales: ["pt-BR"],
    defaultLocale: "pt-BR",

    theme: {
      light: {
        colors: {
          primary100: "#f3f8f4",
          primary200: "#d8e9dc",
          primary500: "#4F684E",
          primary600: "#283618",
          primary700: "#1a2518",
          buttonPrimary500: "#4F684E",
          buttonPrimary600: "#283618",
        },
      },
      dark: {
        colors: {
          primary100: "#f3f8f4",
          primary200: "#d8e9dc",
          primary500: "#4F684E",
          primary600: "#283618",
          primary700: "#1a2518",
          buttonPrimary500: "#4F684E",
          buttonPrimary600: "#283618",
        },
      },
    },

    tutorials: false,

    notifications: {
      releases: false,
    },

    translations: {
      "pt-BR": {
        "app.components.LeftMenu.navbrand.title": "Kianda CMS",
        "app.components.LeftMenu.navbrand.workplace": "Painel Admin",
        "Auth.form.welcome.title": "Kianda CMS",
        "Auth.form.welcome.subtitle": "Faça login para continuar",

        // Traduções de status Draft/Published
        "content-manager.components.DraftBadge.label": "Rascunho",
        "content-manager.components.PublishedBadge.label": "Publicado",
        "content-manager.popover.draft.title": "Rascunho",
        "content-manager.popover.published.title": "Publicado",
        "content-manager.containers.edit.panels.publish.header": "Publicação",
        "content-manager.components.EditViewDataManagerProvider.draft":
          "Rascunho",
        "content-manager.components.EditViewDataManagerProvider.published":
          "Publicado",

        // Botões de ação
        "content-manager.components.DraftBadge.unpublish": "Despublicar",
        "content-manager.containers.Edit.publish": "Publicar",
        "content-manager.containers.Edit.save": "Salvar",
      },
    },
  },

  bootstrap(app: StrapiApp) {
    // Código executado ao iniciar o admin
    console.log("🚀 Kianda CMS Admin initialized");
  },
};
