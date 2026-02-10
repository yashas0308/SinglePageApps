document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#projectsTable tbody');
    const addRowBtn = document.getElementById('addRowBtn');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Add initial row
    addRow();

    // Event Listeners
    addRowBtn.addEventListener('click', addRow);
    
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Function to add a new row
    function addRow() {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>
                <input type="text" name="projectName[]" placeholder="Project Name" required style="width: 100%;">
            </td>
            <td>
                <input type="text" name="role[]" placeholder="Role" required style="width: 100%;">
            </td>
            <td>
                <select name="status[]" style="width: 100%;">
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </td>
            <td>
                <button type="button" class="btn btn-danger delete-btn">Remove</button>
            </td>
        `;

        // Add event listener to the new delete button
        const deleteBtn = row.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
             // Ensure at least one row remains
            if (tableBody.querySelectorAll('tr').length > 1) {
                row.remove();
            } else {
                alert("You must have at least one project entry.");
            }
        });

        tableBody.appendChild(row);
    }
});
