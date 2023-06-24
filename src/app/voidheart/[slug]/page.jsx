import React from "react";
import * as PostService from '@/lib/services/posts';
import Post from "@/components/ui/post";

const SECTION = 'voidheart';

export const generateStaticParams = async () => {
  const posts = PostService.getPostsByGroup(SECTION).map((post) => ({
    slug: post.slug,
  }));
  return posts;
};

const Voidheart = (props) => {
  return (
    <Post group={SECTION} slug={props.params.slug} />
  );
};

export default Voidheart;