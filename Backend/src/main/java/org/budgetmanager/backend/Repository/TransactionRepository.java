package org.budgetmanager.backend.Repository;
import org.budgetmanager.backend.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long > {

}
