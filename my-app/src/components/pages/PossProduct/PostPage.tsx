import { useParams } from "react-router-dom";
import PostContent from "./PostContent";
import CommentsBlock from "./CommentBlock";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <PostContent postId={id!} />
      <CommentsBlock postId={id!} />
    </div>
  );
};

export default PostPage;
