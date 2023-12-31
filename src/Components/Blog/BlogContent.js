import React from "react";
import images from "../ImageImports";

const BlogContent = () => {
  return (
    <div class="col-lg-8">
      <article class="single-blog-content-wrap">
        <header class="article-head">
          <div class="single-blog-thumb">
            <img src={images.blog1} class="img-fluid" alt="Blog" />
          </div>
          <div class="single-blog-meta">
            <h2>Awesome Article for Memory of Our Campus Life</h2>
            <div class="posting-info">
              <a href="#">23 May 2017</a> • Posted by: <a href="#">Admin</a>
            </div>
          </div>
        </header>
        <section class="blog-details">
          <p>
            Lorem ipsum condimentum ligula. Fusce fringilla magna non sapien
            dictum, eget faucibus dui maximus. Donec fringilla vel mi consequat
            tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            diam erat. Duvelit lecspoe a blandit sit amet, tempor at lorem.
            Donec ultricies, lorem sed ultrices interdum, leo luctfiiius sem,
            vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et
            molestie massa hhisque ut. Nunc at rutrum leo. Mauris metus mauris,
            tridd.
          </p>
          <p>
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum. Aliquam nonh edunt urna. Integer tincidunt nec nisl vitae
            ullamcorper. Proin sed ultrices erat. Praesent vdd warius
            ultricemassa at faucibus. Aenean dignissim, orci sed faucibus
            pharetra, dui mi dir ssim tortor, sit amet ntum mi ligula sit amet
            augue. Pellentesqs placerat.
          </p>
          <img src={images.blog2} class="img-fluid" alt="Blog" />
          <div class="row">
            <div class="col-lg-6">
              <h5>The Guest Series</h5>
              <p>
                Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
                fermentum. Aliquam non tidunt urna. Integer tincidunt nec nisl
                vitae Proin sed ultrices erat.
              </p>
            </div>
            <div class="col-lg-6">
              <h5>How and why</h5>
              <p>
                Aenean dignissim, orci sed faucibus nissim tortor, sit amet
                condimentum mi ligula sit amet augue.
              </p>
            </div>
          </div>
          <blockquote class="blockquote">
            Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices
            erat. Praesent varius ultrices massa at faucibus.
          </blockquote>
        </section>
        <footer class="post-share">
          <div class="row no-gutters ">
            <div class="col-8">
              <div class="shareonsocial">
                <span>Share:</span>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-vimeo"></i>
                </a>
              </div>
            </div>
            <div class="col-4 text-end">
              <div class="post-like-comm">
                <a href="#">
                  <i class="far fa-thumbs-up"></i>20
                </a>
                <a href="#">
                  <i class="far fa-comments"></i>15
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogContent;