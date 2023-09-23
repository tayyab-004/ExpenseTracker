import { useState } from "react";
import ExpenseList from "./components/expense-tracker/compoenents/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/compoenents/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/compoenents/ExpenseForm";
import categories from "./components/expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Popcorn", amount: 5, category: "Groceries" },
    { id: 2, description: "Car", amount: 1000, category: "Utilities" },
    { id: 3, description: "Egg", amount: 10, category: "Groceries" },
    { id: 4, description: "Firework", amount: 10, category: "Entertainment" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
