document.addEventListener("DOMContentLoaded", function () {
    var hasFormBeenOpened = localStorage.getItem("formOpened");
    if (!hasFormBeenOpened) {
      openBranchForm();
      localStorage.setItem("formOpened", true);
    }
  });

  function openBranchForm() {
    document.querySelector(".edit-form:nth-of-type(1)").style.display =
      "block";
  }

  function opencategoryForm() {
    document.querySelector(".edit-form:nth-of-type(2)").style.display =
      "block";
  }
  function openStudentForm() {
    document.querySelector(".edit-form:nth-of-type(3)").style.display =
      "block";
  }

  function saveChanges() {
    document.querySelector(".edit-form:visible").style.display = "none";
  }

  function closeBranchForm() {
    document.querySelector(".edit-form:nth-of-type(1)").style.display =
      "none";
  }

  function closeCategoryForm() {
    document.querySelector(".edit-form:nth-of-type(2)").style.display =
      "none";
  }
  function closeStudentForm() {
    document.querySelector(".edit-form:nth-of-type(3)").style.display =
      "none";
  }

