import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';
import { readFileSync } from 'fs';
import { join } from 'path';

const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;

const certificateName = process.env.npm_package_name;

const certFilePath = join(baseFolder, `${certificateName}.pem`);
const keyFilePath = join(baseFolder, `${certificateName}.key`);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
    return {
      plugins: [vue(), vuetify({ autoImport: true }),]
    }
  } else {
    // command === 'build'
    return {
      server: {
        https: {
          key: readFileSync(keyFilePath),
          cert: readFileSync(certFilePath)
        },
        port: 3000,        
      },
      test: {
        setupFiles: "vuetify.config.js",
        deps: {
          inline: ["vuetify"],
        },
        globals: true,
        environment: "jsdom",
      },
      plugins: [vue(), vuetify({ autoImport: true }),],
      // resolve: {
      //   extensions: [
      //     '.js',
      //     '.json',
      //     '.jsx',
      //     '.mjs',
      //     '.ts',
      //     '.tsx',
      //     '.vue',
      //     '.css',
      //   ]
      // },
    }
  }
}
)
