package com.diegelmann.biketransport.domain.service

import com.diegelmann.biketransport.domain.model.TransportOrder
import com.diegelmann.biketransport.domain.port.TransportOrderRepository
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.print.attribute.standard.Destination
import kotlin.math.abs

@Service
class TransportOrderService(private val repository: TransportOrderRepository) {
    fun save(
        customer: String,
        startLocation: String,
        destination: String,
        motorcycleType: String,
        transportDatum: LocalDate
    ): TransportOrder {
        val fee = calculatePrice(startLocation, destination)
        val order = TransportOrder(
            customer = customer,
            startLocation = startLocation,
            destination = destination,
            motorcycleType = motorcycleType,
            transportDate = transportDatum,
            fee = fee
        )
        return repository.save(order)
    }

    fun findAll(): List<TransportOrder> = repository.findAll()


    internal fun calculatePrice(startLocation: String, destination: String): Double {
        // Example: amount = distance * 0.5
        return abs(startLocation.hashCode() - destination.hashCode()) * 0.005
    }
}