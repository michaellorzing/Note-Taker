var $noteList = $("#noteList");
var $noteShow = $("#noteShow");
var $newDisplay = $("#newDisplay");


var runNoteQuery = () => {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then((noteData) => {
    console.log(noteData)
    for (var i = 0; i < noteData.length; i++) {
      var $listItem = $("<li class='list-group-item mt-4>");

      $noteList.append(
        $("<h1>").text(noteData[i].title),
        $("<h3>").text(noteData[i].body),
        $("<h4>").text(noteData[i].created_at)
      );
      var $newNotes = $noteList.append($listItem);
      $newNotes.append($newDisplay);
    };
  });
};

$noteShow.on("click", function(event){
  event.preventDefault();
  $newDisplay.empty();
  runNoteQuery();
});