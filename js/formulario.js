document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
  
    // For this example, we'll just log the form values
    console.log("Name:"+ name);
    console.log("Email:", email);
    console.log("Comment:", comment);
    alert('Função funcionando!')
    
    // You can implement further logic here to send the form data to a server or display a success message to the user.
    // For this example, we'll just reset the form fields after logging the values.
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
  });
