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
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{
            type: 'doc',
            id: 'games',
            label: '🎮游戏下载',
        },
        {
            type: 'doc',
            id: 'desktop',
            label: '🖥️桌面端游戏',
        },
        {
            type: 'doc',
            id: 'faq',
            label: '❓疑难解答',
        },
        {
            type: 'category',
            label: 'ℹ️站点信息',
            collapsed: true,
            items: [
                'info/about',
                'info/donate',
                'info/support',
            ],
        },
        {
            type: 'doc',
            id: 'changelog',
            label: '📝更新日志',
        },
        {
            type: 'category',
            label: '📜使用条款',
            collapsed: true,
            items: ['policies/tos',
                'policies/privacy',
                'policies/minor',
                'policies/repost',
                'policies/inclusion',
                'policies/licenses',
            ],
        },
    ],
    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
};

module.exports = sidebars;