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
        server: {
                plugins: [vue(), vuetify({ autoImport: true }),]
        }
      }
    } else {
      // command === 'build'
      return {
        server: {
        https: {
            key: readFileSync(keyFilePath),
            cert: readFileSync(certFilePath)
        },
        // port: 3000,
        // strictPort: true//,
        // proxy: {
        //   '/api': {
        //     target: 'https://localhost:5001/',
        //     changeOrigin: true,
        //     secure: false
        //   }
        // }
    },
    plugins: [vue(), vuetify({ autoImport: true }),]
}
      }
    }
  )
//     server: {
//         https: {
//             key: readFileSync(keyFilePath),
//             cert: readFileSync(certFilePath)
//         },
//         // port: 3000,
//         // strictPort: true//,
//         // proxy: {
//         //   '/api': {
//         //     target: 'https://localhost:5001/',
//         //     changeOrigin: true,
//         //     secure: false
//         //   }
//         // }
//     },
//     plugins: [vue(), vuetify({ autoImport: true }),]
// })


