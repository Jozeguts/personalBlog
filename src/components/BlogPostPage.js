// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Container } from 'react-bootstrap'; // Import React Bootstrap components
import BlockContent from '@sanity/block-content-to-react';

// Initialize Sanity client
const client = createClient({
  projectId: 'enj3h8e4',
  dataset: 'production',
  apiVersion: '2024-07-03', // Update as per your Sanity API version
});

const builder = imageUrlBuilder(client);

// Function to build image URL
function urlFor(source) {
  if (!source) return ''; // Handle undefined source gracefully
  return builder.image(source);
}

// BlogPostPage component
function BlogPostPage() {
  const [postData, setPostData] = useState(null); // State to store post data
  const { slug } = useParams(); // Get slug parameter from URL

  useEffect(() => {
    // Fetch post data based on slug
    const query = `*[_type == "post" && slug.current == $slug][0]`; // Adjusted query to match 'post' type
    client.fetch(query, { slug })
      .then((data) => setPostData(data)) // Set fetched data to state
      .catch(console.error); // Log error if fetch fails
  }, [slug]); // Dependency array ensures useEffect runs on slug change

  // Loading state while data is being fetched
  if (!postData) return <div>Loading...</div>;

  // Render the blog post content
  return (
    <Container className="my-4">
      <article className="p-4 lg:p-16">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="text-3xl lg:text-6xl mb-4">{postData.title}</h1>
              <div className="flex justify-center text-gray-800">
                {postData.author && ( // Check if author data is available
                  <img
                    src={urlFor(postData.author.image)
                      .width(50)
                      .url()}
                    alt={postData.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <p className="flex items-center pl-2 text-2xl">{postData.author.name}</p>
              </div>
            </div>
          </div>
          {postData.mainImage && ( // Check if mainImage data is available
            <img
              src={urlFor(postData.mainImage)
                .width(2000)
                .url()}
              alt={postData.title}
              className="w-full object-cover rounded-t"
              style={{ height: '400px' }}
            />
          )}
        </header>
        <div className="prose lg:prose-xl max-w-full">
          <BlockContent blocks={postData.body} />
        </div>
      </article>
    </Container>
  );
}

export default BlogPostPage;
