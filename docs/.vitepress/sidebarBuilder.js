import path from 'path';
import glob from 'glob';
import fs from 'fs';
import matter from 'gray-matter'

const docsPath = normalizePath(path.join(process.cwd(), 'docs'));

function normalizePath(path) {
    return path.replace(/\\/gm, '/');
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export function getFilesAndOrderByPath(folderPath) {
    const finalPath = normalizePath(path.join(docsPath, folderPath, '/*.md'));
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

export function getAllFoldersInDirectory(folderPath) {
    const startPath = normalizePath(path.join(docsPath, folderPath));
    const folders = fs.readdirSync(startPath).filter(x => {
        return !x.includes('.md');
    })

    const objects = [];
    for (let folder of folders) {
        const nextPath = normalizePath(path.join(startPath, folder)).replace(docsPath, '');
        objects.push({
            text: `${capFirstLetter(folder)}`,
            collapsible: true,
            collapsed: true,
            items: getFilesAndOrderByPath(nextPath)
        })
    }

    return objects
}