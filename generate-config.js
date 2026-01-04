const fs = require('fs');
const path = require('path');

// 1. dist 폴더 생성
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
}

// 2. config.js 생성 (dist 폴더 안에)
const config = `export const firebaseConfig = {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
    databaseURL: "${process.env.FIREBASE_DATABASE_URL}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.FIREBASE_APP_ID}"
};`;

fs.writeFileSync(path.join(distPath, 'config.js'), config);

// 3. 나머지 파일들(html, css, js)을 dist 폴더로 복사
const filesToCopy = ['index.html', 'style.css', 'script.js'];
filesToCopy.forEach(file => {
    fs.copyFileSync(path.join(__dirname, file), path.join(distPath, file));
});

console.log('Build finished! Files are in dist/ folder.');
