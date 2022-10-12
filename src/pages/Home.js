import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase.config';

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postref = collection(db, 'posts');
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postref);
      const data2 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPostList(data2);
    };
    getPosts();
  }, [postList]);

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  };
  return (
    <div className='homePage'>
      {postList.map((post, idx) => {
        return (
          <div className='post' key={idx}>
            <div className='postHeader'>
              <div className='title'>
                <h1>{post.title}</h1>
              </div>
              <div className='deletePost'>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {' '}
                    &#128465;{' '}
                  </button>
                )}
              </div>
            </div>
            <div className='postTextContainer'>{post.post}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
