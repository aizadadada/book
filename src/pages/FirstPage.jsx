import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FirstPage = ({ firstPage }) => {
    return (
        <>
            <Navbar />
            <div className="FirstPage">
                <Link to="/main">

                    <img
                        className="d-block w-200"
                        src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
                        alt="First slide"
                    />
                </Link>

                <h5 className="first-tense">Писатель только начинает книгу. Читатель заканчивает ее.</h5>
                <p>Сэмюель Джонсон</p>
                <Link to="/main">

                    <img
                        className="d-block w-200"
                        src="https://cutewallpaper.org/21/books-wallpaper-hd/Books-and-books-HD-wallpaper-Latest-Wallpapers-HD.jpg"
                        alt="Second slide"
                    />
                    <h5 className="second-tense">Книги стали моим пропуском в личную свободу.</h5>
                </Link>
                <p>Опра Уинфри</p>
            </div>
        </>
    );
};

export default FirstPage;