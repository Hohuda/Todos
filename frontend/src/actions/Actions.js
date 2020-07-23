import React from "react";

export function fetchCategories() {
  return fetch("/api/v1/categories", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((err) => err);
}

export function updateTodo(todo) {
  const { id, title, description, done, category_id } = todo;
  const data = { title, description, done };
  return fetch(`/api/v1/categories/${category_id}/todos/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => err);
}

export function updateCategory(category) {
  const { id, name } = category;
  return fetch(`/api/v1/categories/${id}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
}
