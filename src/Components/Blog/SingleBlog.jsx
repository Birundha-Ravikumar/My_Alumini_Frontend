import React from "react";
import images from "../../CurrentImages/ImageImports";

const SingleBlog = ({image}) => {
  return (
    <div className="col-lg-6 col-md-6">
      <article className="single-blog-post">
        <figure className="blog-thumb">
          <div className="blog-thumbnail">
            <img src={image} alt="Blog" className="img-fluid" />
          </div>
          <figcaption className="blog-meta clearfix">
            <a href="#" className="author">
              <div className="author-pic">
                <img src={images.author} alt="Author" />
              </div>
              <div className="author-info">
                <h5>Daney williams</h5>
                <p>2 hours Ago</p>
              </div>
            </a>
            <div className="like-comm pull-right">
              <a href="#">
                <i className="fa fa-comment-o"></i>77
              </a>
              <a href="#">
                <i className="fa fa-heart-o"></i>12
              </a>
            </div>
          </figcaption>
        </figure>

        <div className="blog-content">
          <h3>
            <a href="#">
              Recently we create a maassive project that will be a.....
            </a>
          </h3>
          <p>
            This is a big project of our company, we are happy to completed this
            type project which are get world famous award
          </p>
          <a href="/blogrightsidebar" className="btn btn-brand">
            More
          </a>
        </div>
      </article>
    </div>
  );
};

export default SingleBlog;