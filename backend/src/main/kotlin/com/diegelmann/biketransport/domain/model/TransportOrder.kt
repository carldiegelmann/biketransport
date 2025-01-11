package com.diegelmann.biketransport.domain.model

import java.time.LocalDate
import jakarta.persistence.*

@Entity
@Table(name = "transport_orders")
data class TransportOrder(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val customer: String,

    @Column(name = "start_location", nullable = false)
    val startLocation: String,

    @Column(nullable = false)
    val destination: String,

    @Column(name = "motorcycle_type")
    val motorcycleType: String,

    @Column(name = "transport_date")
    val transportDate: LocalDate,

    @Column(nullable = false)
    val fee: Double
){
    // Parameterloser Konstruktor für Hibernate
    constructor() : this(
        id = 0,
        customer = "",
        startLocation = "",
        destination = "",
        motorcycleType = "",
        transportDate = LocalDate.now(),
        fee = 0.0
    )
}