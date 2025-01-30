var typed = new Typed('.typing-animate', {
    strings: ['Computer Science Students. ', 'Beginner Web Designer.', 'Beginner Frontend developer.'],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true
});
let card = document.querySelector("#card");
let toggle = document.querySelector("#toggle")

let displayContent = () => {
    card.className = "flex flex-col bg-white w-1/2 h-auto fixed z-10 absolute top-12 border-4 border-amber-950 right-0"
    card.innerHTML = card.innerHTML = `
    <ul>
        <li class="w-full h-auto text-center bg-amber-200 border-b-2 border-amber-950 py-3 hover:bg-amber-950 duration-300">
            <a href="" class="text-xl font-semibold text-amber-700">Home</a>
        </li>
        <li class="w-full h-auto text-center bg-amber-200 border-b-2 border-amber-950 py-3 hover:bg-amber-950 duration-300">
            <a href="" class="text-xl font-semibold text-amber-700">About</a>
        </li>
        <li class="w-full h-auto text-center bg-amber-200 border-b-2 border-amber-950 py-3 hover:bg-amber-950 duration-300">
            <a href="" class="text-xl font-semibold text-amber-700">Contact Us</a>
        </li>
    </ul>
`

}








toggle.addEventListener("click", displayContent)