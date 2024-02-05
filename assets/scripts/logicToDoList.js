document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoTable = document.getElementById('todo-table').getElementsByTagName('tbody')[0];

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskName = todoInput.value;
        const priority = document.getElementById('priority-select').value;

        if (taskName.trim() !== '') {
            addTask(taskName, priority);
            todoForm.reset();
        }
    });

    function addTask(name, priority) {
        const newRow = todoTable.insertRow();
        const cellNumber = newRow.insertCell(0);
        const cellName = newRow.insertCell(1);
        const cellPriority = newRow.insertCell(2);
        const cellEdit = newRow.insertCell(3);
        const cellDelete = newRow.insertCell(4);

        cellNumber.textContent = todoTable.rows.length;
        cellName.textContent = name;
        cellPriority.textContent = priority;

        const editButton = createButton('Editar', function () {
            editTask(newRow);
        });
        editButton.style.width = '80px';  // Ajusta el ancho del botón Editar

        const deleteButton = createButton('Eliminar', function () {
            deleteTask(newRow);
        });
        deleteButton.style.width = '80px';  // Ajusta el ancho del botón Eliminar

        cellEdit.appendChild(editButton);
        cellDelete.appendChild(deleteButton);
    }

    function editTask(row) {
        const taskName = prompt('Editar Nombre de la Tarea:', row.cells[1].textContent);

        if (taskName !== null) { // Si el usuario no cancela
            const priorityOptions = ['Alta', 'Media', 'Baja'];
            const priority = prompt('Elegir Prioridad (Alta, Media, Baja):', row.cells[2].textContent);

            if (priority !== null && priorityOptions.includes(priority)) { // Si el usuario no cancela y elige una prioridad válida
                row.cells[1].textContent = taskName;
                row.cells[2].textContent = priority;
            } else {
                alert('Prioridad inválida o cancelada. No se realizaron cambios.');
            }
        } else {
            alert('Edición cancelada. No se realizaron cambios.');
        }
    }

    function deleteTask(row) {
        const confirmation = confirm('¿Estás seguro de que deseas eliminar esta tarea?');
        if (confirmation) {
            row.parentNode.removeChild(row);
        }
    }

    function createButton(text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        button.style.padding = '8px 16px';  // Ajusta el relleno del botón
        button.style.fontSize = '14px';  // Ajusta el tamaño de la fuente del botón
        return button;
    }
});
