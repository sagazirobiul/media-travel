import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowBlog = ({ blog }) => {
  const { title, writer, images, _id } = blog;


  return (
    <div
      data-aos="flip-right"
      data-testId="test-blog"
      className="col-md-4 col-sm-12"
    >
      <Card className="cardStyle blogCard">
        <Card.Img
          className="blogCardImg"
          variant="top"
          src={images}
        />
        <Card.Body>
          <h3 className="blogCardTitle">{title}</h3>
            <span className="writerTitle">Written By : <span className="writerName">{writer}</span></span>
            <div className="text-center">
              <Button
                as={Link}
                to={`/blog/details/${_id}`}
                className="blogSeeBtn"
                variant="info"
              >
                Read Blog
              </Button>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowBlog;
