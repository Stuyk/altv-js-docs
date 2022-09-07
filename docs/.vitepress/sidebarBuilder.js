import path from 'path';
import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter'

const docsPath = normalizePath(path.join(process.cwd(), 'docs'));

function normalizePath(path) {
    return path.replace(/\\/gm, '/');
}

export function getFilesAndOrderByPath(folderPath) {
    const finalPath = normalizePath(path.join(docsPath, folderPath, '/**/*.md'));
    const files = glob.sync(finalPath)

    let navigation = [];
    for (const file of files) {
        const fileData = fs.readFileSync(file).toString();
        const matterData = matter(fileData);
        navigation.push({ ...matterData.data, text: matterData.data.title, link: file.replace(docsPath, '') });
    }

    const sortedResults = navigation.sort((a, b) => {
        return a.order - b.order;
    })

    return sortedResults;
}


