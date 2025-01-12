package com.diegelmann.biketransport.controller

import org.springframework.http.ResponseEntity
import com.diegelmann.biketransport.domain.model.TransportOrder
import com.diegelmann.biketransport.domain.service.TransportOrderService
import com.diegelmann.biketransport.domain.model.TransportOrderStatus
import org.springframework.web.bind.annotation.*
import java.time.LocalDate



@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = ["http://localhost:4200"])
class TransportOrderController(private val service: TransportOrderService){


    @GetMapping
    fun findAll(): List<TransportOrder> = service.findAll()


    @PostMapping
    fun createTransportOrder(@RequestBody order: CreateTransportRequest): TransportOrder {
        return service.save(
            order.customer, order.startLocation, order.destination, order.motorcycleType, order.transportDate
        )
    }

    @PatchMapping("/{id}/status")
    fun updateOrderStatus(@PathVariable id: Long, @RequestParam status: TransportOrderStatus): ResponseEntity<TransportOrder> {
        val updatedOrder = service.updateOrderStatus(id, status)
        return ResponseEntity.ok(updatedOrder)
    }

    data class CreateTransportRequest(
        val customer: String,
        val startLocation: String,
        val destination: String,
        val motorcycleType: String,
        val transportDate: LocalDate,
        val fee: Double
    )
}