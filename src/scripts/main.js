'use strict';

function convertToNumber(value) {
  return Number(value);
}

// Функція для сортування списку за зарплатою в порядку спадання
// eslint-disable-next-line no-shadow
function sortList(list) {
  // Отримуємо всі елементи списку
  const items = [...list.children];

  // Сортуємо елементи за зарплатою в порядку спадання
  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA; // Спадання
  });

  // Додаємо відсортовані елементи назад в список
  items.forEach((item) => list.appendChild(item));
}

// Функція для отримання масиву співробітників
// eslint-disable-next-line no-shadow
function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

// Отримуємо список співробітників
const list = document.querySelector('.employee-list');

// Викликаємо функцію для сортування
sortList(list);

// Викликаємо функцію для отримання масиву співробітників
const employees = getEmployees(list);

// Логуємо результат
// eslint-disable-next-line no-console
console.log(employees);
