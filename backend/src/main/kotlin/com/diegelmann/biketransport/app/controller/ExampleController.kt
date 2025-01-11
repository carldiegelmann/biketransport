package com.diegelmann.biketransport.app.controller

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/example")
class ExampleController {

    @GetMapping
    fun sayHello(): String {
        return "Hello, World!"
    }
}