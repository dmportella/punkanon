import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getDirectories = source => fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export const getPostContent = (group, slug) => {
    const folder = path.join(process.cwd(), `src/posts/${group}/`);
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const getAllPosts = () => {
    const folder = path.join(process.cwd(), `src/posts/`);
    const dirs = getDirectories(folder);

    return dirs.map(dir => getPostsByGroup(dir)).reduce((pre, cur) => pre.concat(cur));
}

export const getPostsByGroup = (group) => {
    const folder = path.join(process.cwd(), `src/posts/${group}/`);
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            group: group,
            slug: fileName.replace(".md", ""),
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            description: matterResult.data.description,
            category: matterResult.data.category,
            tags: matterResult.data.tags,
            date: matterResult.data.date,
            author: matterResult.data.author
        };
    });

    return posts;
}