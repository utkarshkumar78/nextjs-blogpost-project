import styles from  './AllPosts.module.css'

import PostGrid from './PostGrid'




export default function AllPosts({posts}){

    return <div className={styles.allPost}>
     <h1 className={styles.heading}>All Posts</h1>
     <PostGrid posts={posts}/>
    </div>
}

    