Настройка JSON Server

Этот проект использует `json-server` для создания мокового REST API с предопределенными данными о `users`, `projects` и `tasks`, хранящимися в `db.json`.

Требования
----------

-   Node.js (версия 12 или новее)
-   Yarn (или используйте npm)

Быстрая настройка
-----------------

Выполните следующие шаги для начала работы:

1.  **Клонируйте репозиторий:**


    `git clone https://github.com/gogo45ish/json-vercel.git
    cd json-vercel`

2.  **Установите зависимости:**


    `yarn install`

    > **Примечание**: Если у вас не установлен Yarn, вы можете установить его с помощью:
    >
    >
    > `npm install -g yarn`

3.  **Запустите JSON сервер:**

    `yarn start`

    Это запустит JSON сервер по умолчанию на http://localhost:3000. Вы можете изменить порт или другие настройки в файле конфигурации `server.js`.

Структура базы данных (`db.json`)

Моковая база данных `db.json` включает следующие структуры:

-   **Users (Пользователи)**: Каждый объект пользователя включает `id`, `username`, `password` и статус `isAuthenticated`.
-   **Projects (Проекты)**: Каждый проект включает `name`, отметку времени `createdAt`, `userId` (владелец), количество выполненных задач `completedTasks` и `id`.
-   **Tasks (Задачи)**: На данный момент этот раздел пуст и может быть дополнен при необходимости.

Пример содержимого `db.json`:

```json
 {
  "users": [
    { "id": "1", "username": "user1", "password": "password1", "isAuthenticated": false },
    { "id": "2", "username": "user2", "password": "password2", "isAuthenticated": false },
    { "id": "3", "username": "123", "password": "123", "isAuthenticated": false }
  ],
  "projects": [
    { "name": "FIRST", "createdAt": "2024-11-06T11:09:16.386Z", "userId": 1, "completedTasks": 2, "id": "3" },
    { "name": "SECOND", "createdAt": "2024-11-06T11:09:21.549Z", "userId": 1, "completedTasks": 0, "id": "4" },
    { "name": "FIRST PROJECT", "createdAt": "2024-11-06T14:29:41.730Z", "userId": 3, "completedTasks": 1, "id": "5" }
  ],
  "tasks": []
}
```


Скрипты


-   **Запуск сервера**: используйте `yarn start` для запуска сервера и сервировки API.

Если вы хотите изменить конфигурацию скрипта сервера, вы можете обновить раздел `scripts` в `package.json`:

```json
"scripts": {
  "start": "node api/server.js"
}
```

Доступные эндпоинты

После запуска сервера доступны следующие эндпоинты:

-   **Users (Пользователи)**: `http://localhost:3000/users`
-   **Projects (Проекты)**: `http://localhost:3000/projects`
-   **Tasks (Задачи)**: `http://localhost:3000/tasks`

Каждый эндпоинт поддерживает стандартные RESTful действия (GET, POST, PUT, DELETE).

Дополнительные ресурсы

Для более детальных настроек и расширенных возможностей посетите [страницу json-server на GitHub](https://github.com/typicode/json-server).
