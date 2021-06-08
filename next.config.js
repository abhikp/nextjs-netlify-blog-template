module.exports = ({
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
  async redirects() {
    return [
      {
        source: '/test-redirect',
        destination: 'https://app.ashbyhq.com',
        permanent: true,
      },
    ]
  },
});
