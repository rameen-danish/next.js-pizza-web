"use client";
import React, { useState } from "react";

export default function OrderSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment]= useState<string>("");

  const handleAddComment = (e :  React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([...comments, newComment]);
    setNewComment("");
  };
  return (
    <section>
      <div className="items-center text-center bg-black mx-auto px-4 lg:px-8 py-8">
        {/* Order Form Section */}
        <h1 className="border-white text-white font-serif lg:text-5xl md:text-5xl text-4xl">
          Order Now
        </h1>
        <form className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2 border-gray-500 border-r-2">
          <div className="grid grid-cols-1">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="flavour"
                  className="block text-sm font-medium text-white"
                >
                  Pizza Flavour
                </label>
                <input
                  type="text"
                  id="flavour"
                  placeholder="Enter your pizza flavour"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 rounded border-l-2 border-b-2 border-gray-500 bg-transparent w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-white"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  placeholder="How many pizzas do you want to order?"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-white"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  placeholder="Please provide your address..."
                  className="box text-slate-500 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-l-2 border-b-2 border-gray-500 bg-transparent w-full resize-none focus:bg-slate-200 focus:text-black"
                />
              </div>

              <button
                type="submit"
                className="btn w-full p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-orange-500 transition-colors hover:bg-gray-800 hover:text-white"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </form>

        {/* Comments Section */}
        <div className="max-w-2xl mx-auto mt-10 p-6 rounded-lg bg-transparent border-2 border-gray-500 border-r-2">
          <h2 className="text-2xl font-bold text-white mb-4">Comments</h2>
          <form onSubmit={handleAddComment} className="mb-6">
            <textarea
              className="box text-slate-500 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-l-2 border-b-2 border-gray-500 bg-transparent w-full resize-none focus:bg-slate-200 focus:text-black"
              placeholder="Add your comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className={`mt-2 w-full p-2 text-black font-bold rounded border-l-4 border-r-4 border-black bg-orange-500 transition-colors hover:bg-gray-800 hover:text-white ${
                !newComment.trim() ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={!newComment.trim()}
            >
              Submit Comment
            </button>
          </form>

          <div className="space-y-4">
            {comments.length === 0 ? (
              <p className="text-gray-400">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment:any, index:any) => (
                <div
                  key={index}
                  className="p-4 bg-gray-400 text-black rounded shadow-md border border-gray-600"
                >
                  {comment}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
