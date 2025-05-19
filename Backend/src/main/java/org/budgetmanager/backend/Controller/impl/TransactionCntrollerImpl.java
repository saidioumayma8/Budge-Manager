package org.budgetmanager.backend.Controller.impl;
import org.budgetmanager.backend.Controller.TransactionController;
import org.budgetmanager.backend.Service.TransactionService;
import org.budgetmanager.backend.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/transaction")
@RestController
public class TransactionCntrollerImpl implements TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Override
    public String addTransaction(Transaction transaction) {
        return transactionService.addTransaction(transaction);
    }

    @Override
    public Transaction retrieveTransaction(Long id) {
        return transactionService.getTransaction(id);
    }

    @Override
    public List<Transaction> retrieveAllTransaction() {
        return transactionService.getAllTransaction();
    }

    @Override
    public String removeTransaction(Long id) {
        return transactionService.deleteTransaction(id);
    }

    @Override
    public Transaction updateTransaction(Transaction transaction) {
        return transactionService.updateTransaction(transaction);
    }
}
