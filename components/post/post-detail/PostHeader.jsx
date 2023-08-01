import Image from 'next/image'
import styles from './PostHeader.module.css'

const PostHeader=props=>{

   const {data}=props;
   console.log('data',data)

 const slug=data.title.toLowerCase().split(' ').join('-')

return <>
<div className={styles.header}>
<div className={styles.title}><div>{data.title}</div></div>
 <div>
    <Image src={`/images/posts/${slug}/${data.image}`} alt={data.title} width={150} height="100"/>
 </div>
</div>
<hr/>
</>



}


export default PostHeader;