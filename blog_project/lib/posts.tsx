import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
    //get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        //remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        //read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title
        }

        //combine data with the id
        return blogPost

    })
    return allPostsData

}