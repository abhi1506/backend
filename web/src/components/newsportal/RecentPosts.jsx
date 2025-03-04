import React from "react";
import "./RecentPosts.css";

export default function RecentPosts({ news}) {
  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      <div className="recent-posts-container">
        {news.length > 0 ? (
          news.map((post, index) => (
            <div className="recent-post-card" key={post.id || index}>
              <img
                src={post.images?.[0]?.url || "/default-image.jpg"} 
                alt={post?.title || "Recent Post Image"} 
                className="recent-post-img"
              />
              <div className="recent-post-info">
                <h3 className="recent-post-title">{post?.title || "Untitled Post"}</h3>
                <p className="recent-post-date">
                  {post?.publishDate
                    ? new Date(post.publishDate).toLocaleDateString()
                    : "Unknown Date"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-posts">No recent posts available.</p>
        )}
      </div>
    </div>
  );
}
