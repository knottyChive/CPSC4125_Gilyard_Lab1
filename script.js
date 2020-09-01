$(document).ready(function() {
    // Prepopulated List
    var tadoies = ["Black Lives Matter", "see new Dimension", "Groceries on Pluto", "go vote Tuesday, November 3, 2020"];
    
    // map the todos into a group on the page 
    function showList(arr) {
        $('.list-group').html(" ");
        arr.forEach(element => {
            $(".list-group").append(`<li class="list-group-item"><input type="checkbox" name="${element}" id="entryDisplay"> <span id="tadoieName">${element}</span></li>`);
        })
    }
    showList(tadoies);

    // to add to the todo list onclick() 
    $("#addTodoBtn").click(function() {
        event.preventDefault();
        var tadoie = $("#userField").val();
        tadoies.push(tadoie);
        showList(tadoies);
    });

    $("input[type=checkbox]").on("click", () => {
        console.log(event.target.name);
        console.log(tadoies.indexOf(event.target.name));

        var index = tadoies.indexOf(event.target.name);
        if ( index > -1) {
            tadoies.splice(index, 1);
            showList(tadoies);
        } else {
            alert("item not found")
        }
    })
});