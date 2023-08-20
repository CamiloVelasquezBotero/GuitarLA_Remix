import Posts from './Posts'

function ListadoPosts({posts}) {
  return (
    <>
        <h2 className="heading">Blog</h2>
        <div className="blog">
            {posts.map( post => (
                <Posts 
                    key={post.id}
                    post={post.attributes}
                /> 
            ))}
        </div>
    </>
  )
}

export default ListadoPosts