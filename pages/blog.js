import React from "react";
import Link from "next/link";

class Blog extends React.Component {
  render() {
    return (
      <div>
          <h1>Blog</h1>
          <Link href="/">
          <a>Return to home page</a>
        </Link>
      </div>
    );
  }
}

export default Blog;