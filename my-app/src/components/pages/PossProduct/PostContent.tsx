const PostContent = ({ postId }: { postId: string }) => {
  const isOwner = true; 

  return (
    <div className="post-card">
      <img src="/dog.jpg" alt="dog" />
      <h1>Post about dog</h1>
      <p>
        Собака — это верный друг, который приносит в нашу жизнь много радости...
      </p>

      <div>
        <button>❤️ 12</button>
        <button>💔</button>
      </div>

      {isOwner && <button>Редактировать</button>}
    </div>
  );
};

export default PostContent;