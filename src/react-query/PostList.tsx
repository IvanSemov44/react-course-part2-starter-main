import React from 'react';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  // const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({
    // page,
    pageSize
  }
    // userId
  );

  if (isLoading) return <p>"Loading"</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        className="form-select md-3"
        value={userId}
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {posts.pages.map((page, index) =>
          <React.Fragment key={index}>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        )}

        {/* {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))} */}
      </ul>
      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
      {/* <button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button> */}
    </>
  );
};

export default PostList;
