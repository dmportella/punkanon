import * as PostService from '@/lib/services/posts'
import Link from 'next/link';

const PostCard = (props) => {
    return (
        <article key={props.post.group + '/' + props.post.slug}>
            <p>{props.post.date.toDateString()}</p>
            <Link href={`/${props.group}/${props.post.slug}`}>
                <h2>{props.post.title}</h2>
            </Link>
            <p>by {props.post.author}</p>
        </article>
    )
}

const PostPreview = (props) => {
    const posts = (props.group === 'all') ? PostService.getAllPosts() : PostService.getPostsByGroup(props.group);

    return <section id='posts'>{posts.map(post => <PostCard group={post.group} post={post}/>)}</section>
}

export default PostPreview