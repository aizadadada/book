import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = ({ firstPage }) => {
    return (
        <>
            <div className="FirstPage">
                <h1>Тому, кто читает книги, никогда не скучно
                    <img src="https://cutewallpaper.org/21/books-wallpaper-hd/Books-and-books-HD-wallpaper-Latest-Wallpapers-HD.jpg" />
                </h1>
                {/* <Button onClick={firstPage}>Каталог</Button> */}
                <a className="fisrtPageLink" href="/main">Каталог</a>
            </div>
        </>
    );
};

export default FirstPage;