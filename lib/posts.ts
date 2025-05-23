import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import CustomImage from "@/app/components/articles/CustomImage";
import Video from "@/app/components/articles/Video";
import Ineq from "@/app/components/articles/Ineq";
import Blockeq from "@/app/components/articles/Blockeq";

type Filetree = {
    tree: [
        {
            path: string;
        }
    ];
};

export async function getPostByName(
    fileName: string
): Promise<BlogPost | undefined> {
    const res = await fetch(
        `https://raw.githubusercontent.com/ajaycc17/blog_articles/main/${fileName}`,
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${process.env.GH_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
            },
        }
    );
    if (!res.ok) return undefined;

    const rawMDX = await res.text();

    if (rawMDX === "404: Not Found") return undefined;

    const { frontmatter, content } = await compileMDX<{
        title: string;
        date: string;
        description: string;
        tags: string[];
    }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
            Ineq,
            Blockeq,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [
                        rehypeAutolinkHeadings,
                        {
                            behavior: "wrap",
                        },
                    ],
                ],
            },
        },
    });

    const id = fileName.replace(/\.mdx$/, "");

    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            date: frontmatter.date,
            description: frontmatter.description,
            tags: frontmatter.tags,
        },
        content,
    };
    return blogPostObj;
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch(
        "https://api.github.com/repos/ajaycc17/blog_articles/git/trees/main?recursive=1",
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${process.env.GH_TOKEN}`,
                "X-GitHub-Api-Version": "2022-11-28",
                auth: `${process.env.GH_TOKEN}`,
            },
        }
    );
    if (!res.ok) return undefined;
    const repoFiletree: Filetree = await res.json();

    const filesArray = repoFiletree.tree
        .map((obj) => obj.path)
        .filter((path) => path.endsWith(".mdx"));

    const posts: Meta[] = [];

    for (const file of filesArray) {
        const post = await getPostByName(file);
        if (post) {
            const { meta } = post;
            posts.push(meta);
        }
    }
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
