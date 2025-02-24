---
title: "Gestionar proyectos utilizando la metodologia SCRUM en Jira"
date: "01-17-2025"
author: "Juan Pérez"
image: "/images/posts/Jira-for-scrum.png"
---

# Cómo mejorar el rendimiento en React 🚀

React es una de las bibliotecas más populares para desarrollar interfaces de usuario, pero si no se optimiza correctamente, el rendimiento puede verse afectado. En este artículo, exploraremos algunas estrategias clave.

### 1. Usar `React.memo` para evitar renders innecesarios

Cuando un componente recibe las mismas props y no cambia, podemos envolverlo con `React.memo` para evitar renders innecesarios.

```tsx
import React from "react";

const MiComponente = React.memo(({ name }) => {
  console.log("Renderizando...");
  return <h1>Hola, {name}!</h1>;
});
```
