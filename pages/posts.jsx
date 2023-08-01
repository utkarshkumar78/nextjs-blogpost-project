import { getAllPosts} from '../helper/post-util'

import AllPosts from '../components/post/AllPosts'

export default function AllPostsPage({posts}) {

    console.log('POSTS',posts)

    return <div className="posts">
        <AllPosts posts={posts}/>
    </div>
}


export function getStaticProps(){


    const posts=getAllPosts().map(post=>post.data)


    return {
      props:{posts}
    }
 


}