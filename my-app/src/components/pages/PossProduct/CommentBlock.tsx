import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CommentsBlock = ({ postId }: { postId: string }) => {
  const [value, setValue] = useState("");

  const comments: string[] = []; // временно

  return (
    <div>
      <h3>Комментарии</h3>

      {comments.length === 0 && (
        <p>Начните беседу написав первый комментарий</p>
      )}

      <ReactQuill
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ size: ["small", false, "large"] }],
            ["bold", "italic", "underline"],
            ["blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        }}
      />

      <button>Добавить</button>
    </div>
  );
};

export default CommentsBlock;