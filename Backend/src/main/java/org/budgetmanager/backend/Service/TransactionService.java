package org.budgetmanager.backend.Service;
import org.budgetmanager.backend.entity.Transaction;
import java.util.List;

public interface TransactionService {
    List<Transaction> getAllTransaction();
    String addTransaction (Transaction transaction);
    Transaction updateTransaction (Transaction transaction);
    String deleteTransaction (Long id);
    Transaction getTransaction (Long id);
}

