import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import 'date-fns'


const AddProduct = () => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: "",
        photo: "",
        author: "",
        genres: ""
    })
    const { createProduct } = useContext(adminContext)
    function handleInputs(e) {
        let newProduct = {
            ...book,
            [e.target.name]: e.target.value
        }
        setBook(newProduct)
    }
    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField value={book.author} id="standard-basic" label="Автор книги" name="author" onChange={handleInputs} />
                    <TextField value={book.title} id="standard-basic" label="Название книги" name="title" onChange={handleInputs} />
                    <TextField value={book.description} id="standard-basic" label="Описание книги" name="description" onChange={handleInputs} />
                    <TextField type="number" value={book.price} id="standard-basic" label="Цена книги" name="price" onChange={handleInputs} />
                    <TextField value={book.photo} id="standard-basic" label="Фото книги" name="photo" onChange={handleInputs} />
                    <TextField value={book.genres} id="standard-basic" label="Жанр книги" name="genres" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !book.title.trim() ||
                                !book.description.trim() ||
                                !book.price.trim() ||
                                !book.photo.trim() ||
                                !book.author.trim() ||
                                !book.genres.trim()
                            ) {
                                alert("Заполните все поля")
                                return
                            }
                            createProduct({
                                title: book.title.trim(),
                                description: book.description.trim(),
                                price: book.price.trim(),
                                photo: book.photo.trim(),
                                author: book.author.trim(),
                                genre: book.genres.trim()

                            })
                        }}
                        variant="outlined"
                        color="'transparent'"
                    >
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;