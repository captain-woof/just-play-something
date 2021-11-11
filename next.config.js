/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['usercontent.jamendo.com']
  },
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    scope: './',
    sw: 'service-worker.js'
  }
})
