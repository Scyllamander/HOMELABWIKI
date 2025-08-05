// Simple script to help convert Notion HTML to wiki pages
// This is a helper script - you can run it or manually convert the pages

const pages = [
    {
        source: 'HomelabWikiSite/Virtual Machines 2440ef8d39c68059ad56dc17386c9227.html',
        target: 'pages/virtual-machines.html',
        title: 'Virtual Machines',
        icon: 'fas fa-laptop'
    },
    {
        source: 'HomelabWikiSite/Network 2440ef8d39c6808785fce383d9db993e.html',
        target: 'pages/network.html',
        title: 'Network',
        icon: 'fas fa-network-wired'
    },
    {
        source: 'HomelabWikiSite/Security 2440ef8d39c680a9bd25c8211e4362c8.html',
        target: 'pages/security.html',
        title: 'Security',
        icon: 'fas fa-shield-alt'
    },
    {
        source: 'HomelabWikiSite/Automation 2440ef8d39c68009bc2cf7ff0b55f042.html',
        target: 'pages/automation.html',
        title: 'Automation',
        icon: 'fas fa-robot'
    },
    {
        source: 'HomelabWikiSite/Projects & Experiments 2440ef8d39c68079a374ca8a66dca0bd.html',
        target: 'pages/projects.html',
        title: 'Projects & Experiments',
        icon: 'fas fa-lightbulb'
    },
    {
        source: 'HomelabWikiSite/Troubleshooting Logs 2450ef8d39c680769027f1b1563355dc.html',
        target: 'pages/troubleshooting.html',
        title: 'Troubleshooting',
        icon: 'fas fa-bug'
    }
];

console.log('Pages to convert:', pages);
console.log('You can manually convert each page using the infrastructure.html template as a base.'); 