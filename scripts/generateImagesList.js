// scripts/generateImagesList.js

const fs = require('fs');
const path = require('path');

// public/images 경로
const imagesDir = path.join(__dirname, '../public/gallery_images');
// src/constants 경로
const outputDir = path.join(__dirname, '../src/constants');

// 파일 읽기
const files = fs.readdirSync(imagesDir);

// jpeg, png 필터링
const imageFiles = files.filter(file =>
  /\.(jpeg|jpg|png)$/i.test(file)
);

// 배열 형태로 변환
const imagePaths = imageFiles.map(file => `/gallery_images/${file}`);

// 출력할 TypeScript 파일 내용 만들기
const output = `
export const images = ${JSON.stringify(imagePaths, null, 2)};
`;

// src/constants 폴더 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 파일 저장
fs.writeFileSync(path.join(outputDir, 'images.ts'), output.trim());

console.log('✅ images.ts 파일이 생성되었습니다!');
