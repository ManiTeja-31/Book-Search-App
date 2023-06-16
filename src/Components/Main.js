import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Main = () => {
    const initialbookstate = ""
    const [bookname, setBookname] = useState(initialbookstate)
    const [bookdata, setBookdata] = useState([])

    const searchBook = (event) => {
        if (event.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}&key=AIzaSyA2oKw-EG5kw6QmkxRBiGTKEz8VD8_FPps`+'&maxResults=40')
                .then(response =>  setBookdata(response.data.items))
                .catch(error => console.log(error))
        }

    }
    return (
        <>
            <div className='header'>
                <div className='row1'>
                    <h1>Books are the quietest and most constant of friends;<br />
                        they are the most accessible and wisest of counselors,<br />
                        and the most patient of teachers.</h1>
                </div>
                <div className='row2'>
                    <h2>Find Your Book</h2>
                    <div className='search'>
                        <input type='text' placeholder='Enter your book name'
                            value={bookname} onChange={e => setBookname(e.target.value)} 
                           onKeyPress={searchBook}/>
                        <button onClick={searchBook}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    {/* <img src='./images/bg1.jpeg' alt='library-background' /> */}
                </div>
            </div>
            <div className='container'>
                {
                    <Card book={bookdata} />
                }
            </div>
        </>
    )
}

export default Main
