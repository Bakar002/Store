import React, { useState } from 'react';

// Sample product data
const product = {
  id: 1,
  title: 'Jordan Spizike Low',
  description: "Men's shoes",
  price: 160,
  imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png',
};

// Sample data for existing comments
const initialComments = [
  { id: 1, name: 'John Doe', text: 'Great shoes! Very comfortable and stylish.', rating: 4, userImage: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Jane Smith', text: 'Not bad, but could use more color options.', rating: 3, userImage: 'https://i.pravatar.cc/150?img=2' },
];

const Feed = () => {
  // State for comments and the new comment form
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState('');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new comment object
    const newComment = {
      id: comments.length + 1,
      name: userName,
      text: commentText,
      rating,
      userImage: `https://i.pravatar.cc/150?img=${comments.length + 3}`, // Random user image
    };

    // Add the new comment to the existing comments
    setComments([...comments, newComment]);

    // Reset the form fields
    setCommentText('');
    setUserName('');
    setRating(1);
  };

  // Render stars for the rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill={index < rating ? 'gold' : 'gray'}
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.151-5.931 5.775 1.4 8.13-7.337-3.853-7.337 3.853 1.4-8.13L.132 9.169l8.2-1.151L12 .587z" />
      </svg>
    ));
  };

  return (
    <div className="p-8 mb-16 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-12">
      {/* Product Information */}
      <div className="flex items-center justify-between mb-8">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />
        <div className="ml-6">
          <h2 className="text-3xl font-semibold text-gray-800">{product.title}</h2>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
        </div>
      </div>

      {/* Product feedback form */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-lg font-medium text-gray-700">Your Feedback</label>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            rows="4"
            placeholder="Write your comment here"
          ></textarea>
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-lg font-medium text-gray-700">Rating</label>
          <div className="flex space-x-2">
            {renderStars(rating)}
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="bg-gray-200 text-black rounded-lg p-2"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transform transition-all hover:scale-105"
          >
            Submit Review
          </button>
        </div>
      </form>

      {/* Display comments */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Product Reviews</h3>
        {comments.length === 0 ? (
          <p className="text-lg text-gray-600">No reviews yet. Be the first to leave a comment!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-6 rounded-xl shadow-md mb-6 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={comment.userImage}
                  alt={comment.name}
                  className="w-12 h-12 object-cover rounded-full shadow-md"
                />
                <div>
                  <strong className="text-xl text-gray-800">{comment.name}</strong>
                  <div className="flex text-yellow-500">{renderStars(comment.rating)}</div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-lg">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
