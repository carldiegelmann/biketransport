package com.diegelmann.biketransport

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@SpringBootApplication
@EntityScan(basePackages = ["com.diegelmann.biketransport.domain.model"])
@EnableJpaRepositories(basePackages = ["com.diegelmann.biketransport.domain.port"])
class BiketransportApplication

fun main(args: Array<String>) {
	runApplication<BiketransportApplication>(*args)
}
