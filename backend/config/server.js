// backend/config/server.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// .env を手動で読み込む（←重要）
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default ({ env }) => {
  console.log('✅ APP_KEYS =', env('APP_KEYS')); // デバッグ出力

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};


