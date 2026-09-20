import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BookList = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(
                    'https://openlibrary.org/subjects/science_fiction.json?limit=20'
                )
                setBooks(response.data.works)
            } catch (error) {
                setError('Failed to fetch books')
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            <h1>Book Showcase</h1>
            <ul style={{ listStyleType: 'none' }}>
                {books.map((book) => (
                    <li key={book.key} style={{ margin: '10px' }}>
                        <h2>{book.title}</h2>
                        <p><b>Published:</b> {book.first_publish_year}</p>
                        {book.cover_id ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                                alt={book.title}
                            />
                        ) : (
                            <p>No cover available</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList