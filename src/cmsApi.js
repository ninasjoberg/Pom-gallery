const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'c7rzfgd4',
  dataset: 'production',
  useCdn: true,
});

export default client;

// const mainImage = ' "mainImage": mainImage{"url": asset->url , hotspot} ';
