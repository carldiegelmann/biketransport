package com.diegelmann.biketransport

import com.diegelmann.biketransport.domain.port.TransportOrderRepository
import com.diegelmann.biketransport.domain.service.TransportOrderService

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.mockito.Mockito
import kotlin.math.abs

class TransportOrderServiceTest {

    private val mockRepository: TransportOrderRepository = Mockito.mock(TransportOrderRepository::class.java)
    private val service = TransportOrderService(mockRepository)

    @Test
    fun `should calculate correct price for given locations`() {
        // Arrange
        val startLocation = "Aachen"
        val destination = "Munich"

        // Act
        val price = service.calculatePrice(startLocation, destination)

        // Assert
        val expectedPrice = abs(startLocation.hashCode() - destination.hashCode()) * 0.005
        assertEquals(expectedPrice, price, 0.01, "Price calculation is incorrect")
    }

    @Test
    fun `should return 0 when start and destination are the same`() {
        // Arrange
        val location = "Berlin"

        // Act
        val price = service.calculatePrice(location, location)

        // Assert
        assertEquals(0.0, price, 0.01, "Price should be 0 when start and destination are the same")
    }
}
