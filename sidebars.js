/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Welcome',
      defaultStyle: true,
    },
    'welcome',
    {
      type: 'doc',
      label: 'Developer Quickstart',
      id: 'quickstart',
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'About',
      defaultStyle: true,
    },
    'what-is-nillion',
    'high-value-data',
    'multi-party-computation',
    'nillions-mpc-protocol',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Build',
      defaultStyle: true,
    },
    'concepts',
    {
      type: 'category',
      label: 'Nillion SDK and Tools',
      link: {
        type: 'doc',
        id: 'nillion-sdk-and-tools',
      },
      items: [
        'nilup',
        'nillion',
        'nillion-devnet',
        'node-key2peerid',
        'nada',
        'pynadac',
        'nada-run',
      ],
    },
    {
      type: 'category',
      label: 'Nillion Clients',
      link: {
        type: 'doc',
        id: 'nillion-client',
      },
      items: [
        {
          type: 'category',
          label: 'Python Client',
          link: {
            type: 'doc',
            id: 'python-client',
          },
          items: [
            'python-quickstart',
            'python-client-reference',
            {
              type: 'category',
              label: 'Python Client Examples',
              link: {
                type: 'doc',
                id: 'python-client-examples',
              },
              collapsed: false,
              items: [
                'store-secrets',
                'retrieve-secret',
                {
                  type: 'category',
                  label: 'Permissions',
                  link: {
                    type: 'doc',
                    id: 'permissions',
                  },
                  items: [
                    {
                      type: 'link',
                      label: 'Permissions Examples',
                      href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/examples_and_tutorials/core_concept_permissions',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Compute',
                  link: {
                    type: 'doc',
                    id: 'compute',
                  },
                  items: [
                    {
                      type: 'link',
                      label: 'Single Party Examples',
                      href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/examples_and_tutorials/core_concept_single_party_compute',
                    },
                    {
                      type: 'link',
                      label: 'Multi Party Examples',
                      href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/examples_and_tutorials/core_concept_multi_party_compute',
                    },
                    {
                      type: 'link',
                      label: 'Millionaires Problem',
                      href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/examples_and_tutorials/millionaires_problem_example',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'JavaScript Client',
          link: {
            type: 'doc',
            id: 'js-client',
          },
          items: [
            'js-quickstart',
            {
              type: 'link',
              label: 'JavaScript Client Reference',
              href: 'https://nillion.pub/nillion-js-reference',
            },
            {
              type: 'category',
              label: 'JavaScript Client Examples',
              link: {
                type: 'doc',
                id: 'js-client-examples',
              },
              collapsed: false,
              items: [
                'store-secrets-js',
                'retrieve-secret-js',
                'compute-js',
                'get-user-key-from-snap',
              ],
            },
          ],
        },
        {
          type: 'doc',
          label: 'CLI Client',
          id: 'nillion',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nada Language',
      link: {
        type: 'doc',
        id: 'nada-lang',
      },
      items: [
        'nada-lang-types',
        'nada-lang-operators',
        {
          type: 'category',
          label: 'Programming with Nada',
          link: {
            type: 'doc',
            id: 'nada-lang-programs',
          },
          items: [
            {
              type: 'doc',
              label: 'Arithmetic and Logic',
              id: 'nada-lang-tutorial-arithmetic-and-logic',
            },
            {
              type: 'doc',
              label: 'Functions',
              id: 'nada-lang-tutorial-functions',
            },
            {
              type: 'doc',
              label: 'Lists and Comprehensions',
              id: 'nada-lang-tutorial-lists-and-comprehensions',
            },
            {
              type: 'doc',
              label: 'Lists and Iteration',
              id: 'nada-lang-tutorial-lists-and-iteration',
            },
            {
              type: 'link',
              label: 'More Example Programs',
              href: 'https://github.com/NillionNetwork/nillion-python-starter/tree/main/programs',
            },
          ],
        },
      ],
    },
    'limitations',
    {
      type: 'link',
      label: 'Builder Discussions',
      href: 'https://github.com/orgs/NillionNetwork/discussions',
    },
    {
      type: 'link',
      label: 'Builder Bounties',
      href: 'https://www.notion.so/nillion/Nillion-Builder-Bounties-5a040992ab5f4af4a9e3c43906e70590?pvs=4',
    },
    {
      type: 'link',
      label: 'Report a Bug',
      href: 'https://github.com/orgs/NillionNetwork/discussions/categories/bugs',
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Resources',
      defaultStyle: true,
    },
    'showcase',
    'community-and-support',
    'data-wars',
    'nucleus-builders-program',
    'technical-reports-and-demos',
    'glossary',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Links',
      defaultStyle: true,
    },
    {
      type: 'link',
      label: 'Website',
      href: 'https://nillion.com',
    },
    {
      type: 'link',
      label: 'X (formerly Twitter)',
      href: 'https://twitter.com/nillionnetwork',
    },
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.com/invite/nillionnetwork',
    },
    {
      type: 'link',
      label: 'Github',
      href: 'https://github.com/NillionNetwork',
    },
    {
      type: 'link',
      label: 'Blog',
      href: 'https://nillion.com/news',
    },
  ],
};

export default sidebars;
