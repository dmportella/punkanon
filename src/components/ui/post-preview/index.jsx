import * as PostService from '@/lib/services/posts'
import Link from 'next/link';

const PostCard = (props) => {
    return (
        <li>
            <p>{props.post.date.toDateString()}</p>
            <Link href={`/${props.group}/${props.post.slug}`}>
                <h2>{props.post.title}</h2>
            </Link>
            <p>by {props.post.author}</p>
        </li>
    )
}

const PostPreview = (props) => {
    const posts = (props.group === 'all') ? PostService.getAllPosts() : PostService.getPostsByGroup(props.group);

    return <ul>{posts.map(post => <PostCard group={post.group} post={post}/>)}</ul>
}

export default PostPreview