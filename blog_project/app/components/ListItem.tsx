import Link from "next/link"

type Props = {
    post: BlogPost
}
export default function ListItem({ post }: Props) {
    const { id, title } = post
    return (
        <li className="mt-4 text-base dark:text-white/90" >
            <Link className="underline hover:text-black/70" href={`/posts/${id}`}>
                <p>{title}</p>
            </Link>
        </li>
    )
}