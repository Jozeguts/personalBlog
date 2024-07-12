import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components

const client = createClient({
  projectId: 'enj3h8e4',
  dataset: 'production',
  apiVersion: '2024-07-03', // Update as per your Sanity API version
});

const builder = imageUrlBuilder(client);

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post"] {
      title,
      slug,
      mainImage {
        asset {
          _id,
          url
        }
      },
      body
    }`;

    const timeoutId = setTimeout(() => {
      setError('Failed to load posts.');
      setIsLoading(false);
    }, 10000);

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
        clearTimeout(timeoutId);
      })
      .catch((err) => {
        setError('Failed to load posts.');
        setIsLoading(false);
        console.error(err);
      });

    return () => clearTimeout(timeoutId);
  }, []);

  const urlFor = (source) => {
    return source && builder.image(source).width(500).url();
  };

  const renderBlocks = (blocks) => {
    return blocks.map(block => {
      switch (block._type) {
        case 'block':
          let style = {};
          try {
            style = block.style ? JSON.parse(block.style) : {};
          } catch (error) {
            console.error(`Error parsing style for block ${block._key}:`, error);
            // Handle the error gracefully or set a default style if parsing fails
            style = {}; // Default empty style object
          }
          return (
            <p key={block._key} style={style}>
              {block.children.map(span => {
                if (span.marks.some(mark => mark._type === 'strong')) {
                  return <strong key={span._key}>{span.text}</strong>;
                } else if (span.marks.some(mark => mark._type === 'em')) {
                  return <em key={span._key}>{span.text}</em>;
                } else {
                  return span.text;
                }
              })}
            </p>
          );
        case 'image':
          return <img key={block._key} src={urlFor(block)} alt="Block Image" className="w-100" />;
        case 'code':
          return (
            <pre key={block._key}>
              <code>{block.code}</code>
            </pre>
          );
        case 'quote':
          return (
            <blockquote key={block._key}>
              <p>{block.content}</p>
              {block.author && <cite>{block.author}</cite>}
            </blockquote>
          );
        // Add more cases as needed for other types
        default:
          return null;
      }
    });
  };
  
  if (isLoading) {
    return (
      <Container className="my-4">
        <h1 className="text-center">Loading posts...</h1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <h1 className="text-center">{error}</h1>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Welcome to My Blog</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map(post => (
          <Col key={post.slug.current}>
            <Link to={`/blog/${post.slug.current}`} className="text-decoration-none">
              <Card className="h-100">
                {post.mainImage && (
                  <Card.Img variant="top" src={urlFor(post.mainImage)} alt="Blog Post Cover" />
                )}
                <Card.Body>
                  <Card.Title className="fw-bold">{post.title}</Card.Title>
                  {post.body && (
                    <Card.Text className="text-muted">
                      {renderBlocks(post.body)}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
