package com.cognizant.library.service;

import com.cognizant.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {

        System.out.println("Book Service is working.");

        bookRepository.displayBook();

    }

}