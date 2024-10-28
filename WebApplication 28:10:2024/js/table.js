document.getElementById("addRow").addEventListener("click", function() {
    const table = document.getElementById("coursesTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text" class="form-control" value="Nuovo Corso"></td>
        <td><input type="text" class="form-control" value="4 settimane"></td>
        <td>
            <select class="form-control">
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzato">Avanzato</option>
            </select>
        </td>
        <td>
            <button class="btn btn-danger btn-sm remove-row">Rimuovi</button>
        </td>
    `;
});

document.getElementById("coursesTable").addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-row")) {
        event.target.closest("tr").remove();
    }
});
