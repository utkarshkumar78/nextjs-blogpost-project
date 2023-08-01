import PostDetail from '../../components/post/post-detail/PostDetail' 

import {getPostDetail} from '../../helper/post-util.js'


export default function PostDetailPage({content,data}){
    


    return <>
     <PostDetail post={{data,content}}/>
    </>
}

export function getStaticProps(context){
  const slug=context.params.slug[0]

  console.log('slug',slug)
  const post=getPostDetail(slug)




    return {

        props:{content:post.content,data:post.data}
    }
}

export function getStaticPaths(){

    return {
        paths:
        [
            {params:
                {slug:
        ["getting-started-with-nextjs"]}}
        ],
        fallback:'blocking'
    }
}