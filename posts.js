import { join } from "path";
import fs from "fs";

export const getAllPosts = () => {
    const postsDirectory = join(process.cwd(), "/pages/blog")
    const postFileNames = fs.readdirSync(postsDirectory).filter(x => x !== 'index.js');
    const postsFullPaths = postFileNames.map(x => join(postsDirectory, x));
    const fileContents = postsFullPaths.map(x => fs.readFileSync(x, {encoding:'utf8'}));
    const firstLines = fileContents.map(x => x.split('\n')[0].substring(2));
    const posts = firstLines.map((x, i) => ({...JSON.parse(x), link: `/blog/${postFileNames[i].slice(0, -3)}`})).sort((a, b) => a.date < b.date ? 1 : -1);

    return posts;
};