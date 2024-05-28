$(document).ready(function () {
  //  to remove error text after input
  $("input , textarea").keydown(function () {
    // alert("hii");
    let id = $(this).prop("id");
    removeError(id);
  });
  $("select").on("change", function () {
    let id = $(this).prop("id");
    removeError(id);
  });
  $("input").change(function () {
    let id = $(this).prop("id");
    removeError(id);
  });
});

function addError(idName) {
  let id = "#" + idName;
  $(id).parents(".form-group").addClass("error");
}

function removeError(idName) {
  let id = "#" + idName;
  $(id).parents(".form-group").removeClass("error");
}
