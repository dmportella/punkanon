import Markdown from "markdown-to-jsx";
import React from "react";
import * as PostService from '@/lib/services/posts';

const Post = (props) => {
  const slug = props.slug;
  const post = PostService.getPostContent(props.group, slug);
  const tags = post.data.tags.map((tag) => (<li key={tag}>{tag}</li>));
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date.toDateString()}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
      tags:
      <ul>
        {tags}
      </ul>
    </div>
  );
};

export default Post;
  