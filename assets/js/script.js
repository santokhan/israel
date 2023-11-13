window.addEventListener('load', function () {
    document.getElementById("hamburgerMenu").addEventListener("click", function () {
        const dropDown = document.getElementById("dropdownMenu");
        dropDown.classList.remove("hidden");
        document.getElementById("closeMenu").addEventListener("click", function () {
            dropDown.classList.add("hidden");
        })
    })

    // const accord = document.getElementById("accordion")
    // accord.forEach((e) => {
    //     e[0].addEventListener("click", function () {
    //         e[1].style.display = "block";
    //     })
    // })
})
