// Importing Next.js config with the necessary Babel settings
import pkg from 'next';
const { NextConfig } = pkg;
// Creating a Next.js configuration object
const nextConfig = {
  // Custom Webpack configuration
  webpack: (config) => {
    // Adding the babel-plugin-styled-components plugin to Babel loader
    config.module.rules.push({
      test: /\.(js|jsx|mjs|ts|tsx)$/, // Matching JavaScript and TypeScript files
      use: {
        loader: 'babel-loader', // Using Babel loader for transpilation
        options: {
          // Specifying Babel plugins to use
          plugins: [
            [
              'styled-components', // Adding the styled-components plugin
              { ssr: true } // Enabling server-side rendering (SSR) for styled-components
            ]
          ]
        }
      }
    });

    return config; // Returning the modified Webpack configuration
  }
};

// Exporting the Next.js configuration
export default nextConfig;
