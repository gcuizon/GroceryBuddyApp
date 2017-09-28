package com.sample.soap.webservices.impl;

import javax.jws.WebService;

import com.sample.soap.webservices.HelloWorld;


@WebService(endpointInterface = "com.sample.soap.webservices.HelloWorld", name = "HelloWorldImpl", serviceName = "HelloWorldImpl")

public class HelloWorldImpl implements HelloWorld {

	@Override
    public String sayHi(String text) {
        System.out.println("sayHi called");
        return "Hello " + text;
    }

}
