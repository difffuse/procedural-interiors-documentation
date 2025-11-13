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
        {
          type: 'category',
          label: 'Structure',
          
          items: [
            'how-to-use/structure/space',
            'how-to-use/structure/layout',
            'how-to-use/structure/columns',
            'how-to-use/structure/partition-walls',
          ],
        },
        {
          type: 'category',
          label: 'Openings & Circulation',
          link: {
            type: 'doc',
            id: 'how-to-use/openings-circulation',
          },
          items: [
            'how-to-use/openings-circulation/windows',
            'how-to-use/openings-circulation/doors',
            'how-to-use/openings-circulation/stairs',
          ],
        },
        'how-to-use/furnishing-presets',
        'how-to-use/parametrize',
        'how-to-use/apply-model',
        'how-to-use/help',
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
