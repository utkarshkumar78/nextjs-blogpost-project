import { getAllPosts} from '../helper/post-util'

import Hero from '../components/hero/Hero'
import PostGrid from '../components/post/PostGrid'



export default function HomePage({posts}) {
  console.log('POSTS',posts)


  return (
    <>
     <Hero/>
    <PostGrid posts={posts}/>
    </>
  )
}



export function getStaticProps(){

 const posts= getAllPosts()

  const featuredPosts=posts.map(post=>{
   
      return post.data
    
  }).filter(post=>post.isFeatured)
  console.log(
    'FEAtured posts',featuredPosts
  )

return {
  props:{posts:featuredPosts},
  revalidate:45000,
  
}


}
