import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Procedural Interiors',
  tagline: 'Procedural interior generator Add-on for Blender',
  favicon: 'img/difffuse_logo.svg',
  // these are just for now
  onBrokenLinks: 'warn',
  markdown: {
    hooks:
      {
        onBrokenMarkdownLinks: 'warn',
      },
  },
  
  // Add Font Awesome for social icons
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    },
  ],


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-procedural-interiors-docs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/procedural-interiors-documentation/',   // NOTE: trailing slash!
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'difffuse-studio', // Usually your GitHub org/user name.
  projectName: 'procedural-interiors', // Usually your repo name.

  // onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Procedural Interiors Logo',
        src: 'img/difffuse_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        
        {
          href: 'https://superhivemarket.com/creators/difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-solid fa-store" aria-label="Blender Market"></i>',
        },
        {
          href: 'https://www.youtube.com/@difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-youtube" aria-label="YouTube"></i>',
        },
        {
          href: 'https://www.instagram.com/difffusestudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-instagram" aria-label="Instagram"></i>',
        },
        {
          href: 'https://x.com/DifffuseStudio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-x-twitter" aria-label="Twitter"></i>',
        },
        {
          href: 'https://discord.gg/GC4ZzGkvhH',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-brands fa-discord" aria-label="Discord"></i>',
        },
        {
          href: 'https://difffusestudiosl.gumroad.com/',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-solid fa-cart-shopping" aria-label="Gumroad"></i>',
        },
        {
          href: 'https://difffuse.studio',
          className: 'navbar-icon-link',
          position: 'right',
          html: '<i class="fa-solid fa-globe" aria-label="Difffuse Website"></i>',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Difffuse Studio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
