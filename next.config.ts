import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { remarkCodeHike, recmaCodeHike, type CodeHikeConfig } from 'codehike/mdx';

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

const codeHikeConfig = {
  components: { code: 'MyCode', inlineCode: 'MyInlineCode' },
} satisfies CodeHikeConfig;

const withMDX = createMDX({
  options: {
    remarkPlugins: [[remarkCodeHike, codeHikeConfig]],
    recmaPlugins: [[recmaCodeHike, codeHikeConfig]],
  },
});

export default withMDX(nextConfig);

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
