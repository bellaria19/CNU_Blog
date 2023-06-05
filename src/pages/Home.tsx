import PostListItem from '../components/PostListItem';
import { IResponsePostList } from '../api/types';
import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import NoPostList from '../components/NoPostList.tsx';

/*const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];*/

const Home = () => {
  const [postList, setPostList] = useState<IResponsePostList>([]);
  const fetchPostList = async () => {
    const { data } = await getPostList();
    setPostList(data);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  if (postList.length == 0) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(({ post }, index) => (
        <PostListItem key={index} id={post.id} title={post.title} contents={post.contents} tag={post.tag} />
      ))}
    </div>
  );
};

export default Home;
