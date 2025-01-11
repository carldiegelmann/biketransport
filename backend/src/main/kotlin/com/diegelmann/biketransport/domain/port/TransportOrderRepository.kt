package com.diegelmann.biketransport.domain.port

import com.diegelmann.biketransport.domain.model.TransportOrder
import org.springframework.data.jpa.repository.JpaRepository

interface TransportOrderRepository : JpaRepository<TransportOrder, Long>