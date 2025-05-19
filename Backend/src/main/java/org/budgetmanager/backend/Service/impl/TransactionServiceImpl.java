package org.budgetmanager.backend.Service.impl;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.budgetmanager.backend.Repository.TransactionRepository;
import org.budgetmanager.backend.Service.TransactionService;
import org.budgetmanager.backend.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Service

public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;


    @Override
    public List<Transaction> getAllTransaction() {
        return transactionRepository.findAll();
    }

    @Override
    public String addTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
        return "Transaction added succefully";
    }

    @Override
    public Transaction updateTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public String deleteTransaction(Long id) {
        transactionRepository.deleteById(id);
        return "Transaction deleted succefully";
    }

    @Override
    public Transaction getTransaction(Long id) {
        return  transactionRepository.findById(id).orElse(null);
    }
}
