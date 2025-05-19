package org.budgetmanager.backend.Controller;

import org.budgetmanager.backend.entity.Transaction;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface TransactionController {
    @PostMapping
    String addTransaction(@RequestBody Transaction transaction);

    @GetMapping("/{id}")
    Transaction retrieveTransaction(@PathVariable Long id);

    @GetMapping
    List<Transaction> retrieveAllTransaction();

    @DeleteMapping("/{id}")
    String removeTransaction( @PathVariable Long id);


    @PutMapping()
    Transaction updateTransaction(@RequestBody Transaction transaction);
}
