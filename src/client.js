// sanity.config.js

import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'enj3h8e4',
  dataset: 'production',
  apiVersion: '2024-07-03', // Use the latest API version for your project
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN only in production
});
