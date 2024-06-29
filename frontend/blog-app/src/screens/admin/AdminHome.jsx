import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AdminHome() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleExcerptChange = (e) => setExcerpt(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handlePublicationDateChange = (e) => setPublicationDate(e.target.value);
  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('excerpt', excerpt);
    formData.append('author', author);
    formData.append('publicationDate', publicationDate);
    formData.append('file', selectedFile);

    try {
      await axios.post('http://localhost:5000/api/upload-article', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Article uploaded successfully!');
      // Optionally clear form fields or update UI
    } catch (error) {
      console.error('Error uploading article:', error);
      alert('Failed to upload article.');
    }
  };

  return (
    <div className='upload-parent'>
      {/* Navbar */}
      <Navbar />
      {/* Upload article */}
      <div className='upload-container'>
        <h2>Upload Article</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' name='title' placeholder='Title' value={title} onChange={handleTitleChange} />
          <input type='text' name='excerpt' placeholder='Excerpt' value={excerpt} onChange={handleExcerptChange} />
          <input type='text' name='author' placeholder='Author' value={author} onChange={handleAuthorChange} />
          <input type='date' name='publicationDate' placeholder='Publication date' value={publicationDate} onChange={handlePublicationDateChange} />
          <input type='file' name='file' onChange={handleFileChange} />
          <button type='submit'>Upload</button>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};


