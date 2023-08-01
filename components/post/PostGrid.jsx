import PostItem from './PostItem'

import styles from './PostGrid.module.css'

export default function PostGrid({posts}){


    return <div className={styles.container}>
    {posts.map(post=><PostItem key={post.title} post={post} />)}
    
    </div>
}