import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    // Disabled due to font error that's causing them not to be loaded
    // correctly in the browser.
    // inlineCss: true,
    viewTransition: true,
    prerenderEarlyExit: false,
    routerBFCache: true,
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

const withMDX = createMDX({ options: { remarkPlugins: [], recmaPlugins: [] } });

export default withMDX(nextConfig);

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
