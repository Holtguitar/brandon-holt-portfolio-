// const $form = document.querySelector("#contact-form");

// function handleSubmit (e) {
//     e.preventDefault()

//     const $target = e.target,
//         name = $target.querySelector("#form_name").value,
//         email = $target.querySelector("#form_email").value,
//         message =  $target.querySelector("#form_message").value
    
//     fetch("https://formsubmit.co/el/lukaji", {
//         method: "POST",
//         headers: {
//             'Content-Type' : 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             html: message
//         }).then(
//             res => res.json()
//             ).then(
//                 data => {
//                     console.log(data)
//                 }
//             ).catch(error => {
//                 console.log(error)
//             })
//     })
// }

// $form.addEventListener("submit", handleSubmit)