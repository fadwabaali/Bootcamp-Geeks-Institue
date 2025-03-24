const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "Not provided";
    const lastname = params.get("lastname") || "Not provided";
    return { name, lastname };

}

window.onload = function() {
    const { name, lastname } = getQueryParams();
    document.getElementById("output").innerHTML = 
        `<p><strong>First Name:</strong> ${name}</p>
         <p><strong>Last Name:</strong> ${lastname}</p>`;
};