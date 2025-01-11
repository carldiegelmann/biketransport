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


    private fun calculatePrice(startOrt: String, zielOrt: String): Double {
        // Beispiel: Preis = Distanz * 0.5
        return abs(startOrt.hashCode() - zielOrt.hashCode()) * 0.005
    }
}