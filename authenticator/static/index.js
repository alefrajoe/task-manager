async function printSecretMessage () {

    // If the token is not defined
    if (!localStorage.token){

        // Print message intimating to get the token by registering
        $('#div-message p').text("Please, get a token by logging in")
    } else {

        // Else try to log
        try {
            
            // Try to log in
            const response = await axios.post('/api/v1/auth/login', {},{headers:{Authorization:`JWT ${localStorage.getItem('token')}`}})

        } catch (error) {
            
            // Print message intimating to get the token by registering
            $('#div-message p').text("Please, get a token by logging in")
        }
    }
    // Take the relevant div
    
}

$(document).ready(() => {

    // Log on click
    $('#submit-button').click(async () => {

        // Read the input and the password
        const username = $('#username-input').val()
        const password = $('#password-input').val()

        // Clean the username and the password
        $('#username-input').val("")
        $('#password-input').val("")

        // Log using axios
        const response = await axios.post('/api/v1/auth/', {username:username, password:password})

        // Save to local storage
        localStorage.setItem("token", response.data.token)
    })

    // Try to log in continuously
    printSecretMessage()
})

