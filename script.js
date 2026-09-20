function addNote() {

    let title = document.getElementById("noteTitle").value;
    let text = document.getElementById("noteText").value;

    if (title === "" || text === "") {
        alert("Please enter both title and note.");
        return;
    }

    alert("Note added successfully!");

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteText").value = "";
}