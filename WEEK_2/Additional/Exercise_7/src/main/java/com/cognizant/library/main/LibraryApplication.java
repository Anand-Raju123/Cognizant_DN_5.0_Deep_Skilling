package com.cognizant.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.library.service.BookService;

public class LibraryApplication {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        System.out.println("===== Constructor Injection =====");

        BookService constructorBean =
                context.getBean("bookServiceConstructor", BookService.class);

        constructorBean.displayService();

        System.out.println();

        System.out.println("===== Setter Injection =====");

        BookService setterBean =
                context.getBean("bookServiceSetter", BookService.class);

        setterBean.displayService();

    }

}