import React from "react";
import Banner from "../banner/Banner";
import images from "../ImageImports.js";
import '../typography/style.css';
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const Typography = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Membership Form" />
      <div id="page-content-wrap">
        <div className="typography-page-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <article>
                  <h2>Heading</h2>
                  <h1>This is heading h1</h1>
                  <h2>This is heading h2</h2>
                  <h3>This is heading h3</h3>
                  <h4>This is heading h4</h4>
                  <h5>This is heading h5</h5>
                  <h6>This is heading h6</h6>
                  <h2>Paragraph and Blockquote</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur corporis doloremque doloribus fugit magni
                    molestiae mollitia, necessitatibus nesciunt officia quas sed
                    similique veniam, voluptatem? Aspernatur laudantium natus
                    praesentium quae repudiandae. Explicitate facere facilis
                    neque nesciunt odit porro suscipit temporibus totam! Aperiam
                    at cupiditate dolore iusto nobis numquam, veniam? Ad aliquid
                    animi architecto aspernatur consequatur, dolores ducimus
                    facere in nam, necessitatibus nemo odit optio porro
                    provident quis quisquam similique sunt temporibus unde
                    voluptas! Deserunt itaque laudantium odit quia soluta!
                    Eligendi illo ipsa maxime molestias nihil officiis tempora
                    ullam voluptates. Doloribus eius eos odit quam voluptas?
                  </p>
                  <blockquote className="blockquote">
                    Integer tincidunt nec nisl vitae ullamcorper. Proin sed
                    ultrices erat. Praesent varius ultrices massa at faucibust
                    nec nisl vitae ullamcorper. Proin sed ultrices erat.
                    Praesent varius ultrices massa at faucibus.
                  </blockquote>
                  <h2>Alerts</h2>
                  <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                  </div>
                  <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                  </div>
                  <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                  </div>
                  <div className="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                  </div>
                  <div className="alert alert-info" role="alert">
                    A simple info alert—check it out!
                  </div>
                  <div className="alert alert-light" role="alert">
                    A simple light alert—check it out!
                  </div>
                  <div className="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                  </div>

                  <h2>Image Alignment</h2>
                  <img
                    src={images.ECE1}
                    alt="ECE department"
                    className="img-left img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    aliquid aspernatur consectetur dolore eveniet facilis,
                    inventore iure laborum minima perferendis placeat quas
                    quibusdam quisquam quod rem repellendus sit totam unde ut
                    veritatis! Autem beatae dolorem doloribus ducimus eaque eum
                    laudantium magnam minima molestiae quae, quaerat quia
                    quisquam ratione rerum veritatis. Accusantium eius eum
                    facere fugiat in iure, minima nisi quod recusandae
                    reprehenderit sapiente, sint. Aspernatur assumenda
                    cupiditate deleniti deserunt dolores eius ex id laborum
                    libero neque nihil, nobis officia, omnis perspiciatis saepe
                    sint soluta? Asperiores at doloribus earum optio pariatur
                    quas quidem, quos repellat sint! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Accusantium cupiditate
                    deleniti doloribus, eos iusto molestias non qui sapiente sit
                    temporibus.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi officia porro quo, quos rerum velit vitae! Architecto
                    atque culpa cum fuga harum id illo modi nisi nobis
                    repellendus! At, doloribus eaque error fugit inventore ipsam
                    quia recusandae saepe voluptatem? Aspernatur at
                    <img src={images.ECE2} alt="" className="img-fluid img-right" />
                    consequatur culpa delectus deleniti, dignissimos eos
                    expedita hic impedit iste iusto, laudantium magnam magni
                    modi nemo nisi nulla pariatur quae quibusdam quidem
                    reiciendis repellendus reprehenderit sed suscipit
                    temporibus, vel vitae? Accusantium delectus eligendi
                    explicabo in iusto, magnam neque nesciunt, officiis omnis
                    quae quidem, similique suscipit. Aspernatur consequatur,
                    corporis doloribus eaque earum eligendi esse magnam maiores
                    nulla omnis perferendis quam quod repellat saepe sint ullam
                    ut! Accusantium aliquid amet, assumenda beatae deleniti
                    dolorem ducimus error iure natus nisi optio quam quasi
                    ratione similique unde? A accusamus asperiores atque
                    consectetur cumque earum eligendi error est et eum explicabo
                    facere illo, inventore iste iure laboriosam libero magnam
                    modi natus nemo nobis numquam praesentium quos rerum
                    temporibus vero voluptate voluptatem. Ad aperiam beatae
                    blanditiis consectetur corporis delectus deleniti dolores
                    est eum eveniet facilis illum impedit ipsam iure, libero
                    minus neque nihil nisi obcaecati omnis praesentium
                    repellendus repudiandae saepe tenetur vel.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default Typography;
