import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['installation/download-install', 
        'installation/preferences'
      ],
    },
    {
      type: 'category',
      label: 'How to Use',
      items: [
        'how-to-use/overlays',
        'how-to-use/reference',
        'how-to-use/floor-management',
        'how-to-use/structure',
        'how-to-use/openings-circulation',
        'how-to-use/furnishing-presets',
        'how-to-use/parametrize',
      ],
    },
    {
      type: 'category',
      label: 'Asset Browser',
      items: [
        'asset-browser/overview',
      ],
    },
  ],
};

export default sidebars;
