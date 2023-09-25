import React from "react";
import images from "../../CurrentImages/ImageImports.js";

const BlogArea = () => {
  return (
    <section id="blog-area" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Recent News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <article className="single-blog-post">
              <figure className="blog-thumb">
                <div className="blog-thumbnail">
                  <img
                    src={images.mepgallery4}
                    alt="Blog"
                    className="img-fluid"
                  />
                </div>
                <figcaption className="blog-meta clearfix">
                  <a href="/blogrightsidebar" className="author">
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
                  <a href="/blogrightsidebar">
                    Recently we create a maassive project that
                  </a>
                </h3>
                <p>
                  This is a big project of our company, we are happy to
                  completed this type projec which are get world famous award
                </p>
                <a href="/blogrightsidebar" className="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-6">
            <article className="single-blog-post">
              <figure className="blog-thumb">
                <div className="blog-thumbnail">
                  <img
                    src={images.mepgallery2}
                    alt="Blog"
                    className="img-fluid"
                  />
                </div>
                <figcaption className="blog-meta clearfix">
                  <a href="/blogrightsidebar" className="author">
                    <div className="author-pic">
                      <img src={images.author} alt="Author" />
                    </div>
                    <div className="author-info">
                      <h5>Myra Hindley</h5>
                      <p>1 Day Ago</p>
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
                  <a href="/blogrightsidebar">
                    Myra Hindley and her lover, Ian Brady, plotted and
                  </a>
                </h3>
                <p>
                  This is a big project of our company, we are happy to
                  completed this type projec which are get world famous award
                </p>
                <a href="/blogrightsidebar" className="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-6">
            <article className="single-blog-post">
              <figure className="blog-thumb">
                <div className="blog-thumbnail">
                  <img
                    src={images.mepgallery3}
                    alt="Blog"
                    className="img-fluid"
                  />
                </div>
                <figcaption className="blog-meta clearfix">
                  <a href="/blogrightsidebar" className="author">
                    <div className="author-pic">
                      <img src={images.author} alt="Author" />
                    </div>
                    <div className="author-info">
                      <h5>Aileen Wuornos</h5>
                      <p>3 mins Ago</p>
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
                  <a href="/blogrightsidebarl">
                    Nurse with a private practice, racked up dozens of victims
                  </a>
                </h3>
                <p>
                  This is a big project of our company, we are happy to
                  completed this type projec which are get world famous award
                </p>
                <a href="/blogrightsidebar" className="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;