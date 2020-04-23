module.exports = {
   mode: 'production',
   swDest: 'dist/service-worker.js',
   maximumFileSizeToCacheInBytes: 5000000,
   clientsClaim: true,
   skipWaiting: true,
};
