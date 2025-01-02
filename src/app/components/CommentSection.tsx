'use client';
import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-10 px-4 md:px-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-extrabold mb-6 text-center text-gray-800">
        Share Your Thoughts
      </h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here..."
        className="w-full h-24 border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      ></textarea>
      <button
        onClick={addComment}
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold"
      >
       Add Comment
      </button>
      {comments.length > 0 && (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4 text-gray-700">
            Recent Comments
          </h4>
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border border-gray-200 p-3 rounded-lg shadow-sm bg-white"
              >
                {comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}