window.addEventListener('load', function () {
    document.getElementById("hamburgerMenu").addEventListener("click", function () {
        const dropDown = document.getElementById("dropdownMenu");
        dropDown.classList.remove("hidden");
        document.getElementById("closeMenu").addEventListener("click", function () {
            dropDown.classList.add("hidden");
        })
    })

    const accord = document.getElementById("accordion")

    for (const item of accord.children) {
        item.children[0]?.addEventListener("click", function () {
            item.children[1]?.classList.toggle('hidden')
        })
    }
})
