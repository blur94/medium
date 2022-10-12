import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/image/search.svg';
import { ContextComponent } from '../../hooks/ContextComponent';

export default function Homebody() {
  const { post, setPost } = useContext(ContextComponent);
  console.log(post);
  return (
    <div>
      {post && post.map((posts) => {
        return (
          <div className="container" key={posts._id}>

            <Link to={`/post/${posts._id}`} >
              <div className='flex-home1'>
                <img src={search} alt="" />
                <p>{posts.author}</p>
                <p>in</p>
                <p>{posts.category}</p>
                <p>.</p>
                <p>{posts.created_at} days ago</p>
              </div>

              <div className="flex-home2">

                <div className="flex-home2-right">
                  <h2>{posts.title}</h2>
                  <p>{posts.content}</p>
                </div>
                <div className="flex-home2-left">
                  <img src={search} alt="" />
                </div>

                <div className="flex-home3">
                  <div className="flex-home3-right">
                    <p>{posts.category}</p>
                    <p>{posts.read_time} min read</p>
                    <p>.</p>
                    <p>{posts.is_selected}</p>
                  </div>
                </div>


              </div>
            </Link>
          </div>
        );
      })}

    </div>
  );
}
