const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = {
    'html5': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/html5.svg',
    'css3': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/css3.svg',
    'javascript': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg',
    'java': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/java.svg',
    'nodejs': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg',
    'csharp': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/csharp.svg',
    'kotlin': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kotlin.svg',
    'github': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg',
    'git': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg',
    'kali': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kalilinux.svg',
    'npm': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/npm.svg',
    'php': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/php.svg',
    'python': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg',
    'laravel': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/laravel.svg',
    'flutter': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/flutter.svg',
    'nextjs': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg',
    'bootstrap': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/bootstrap.svg',
    'dotnet': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dotnet.svg'
};

const iconsDir = path.join(process.cwd(), 'public', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

// Download each icon
Object.entries(icons).forEach(([name, url]) => {
    const filePath = path.join(iconsDir, `${name}.svg`);
    https.get(url, (response) => {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${name}.svg`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${name}.svg:`, err.message);
    });
}); 