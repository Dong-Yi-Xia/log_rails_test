// direct_uploads.js

addEventListener("direct-upload:initialize", event => {
  const { target, detail } = event
  const { id, file } = detail
  target.insertAdjacentHTML("beforebegin", `
    <div id="direct-upload-${id}" class="direct-upload direct-upload--pending">
      <div id="direct-upload-progress-${id}" class="direct-upload__progress" style="width: 0%"></div>
      <span class="direct-upload__filename"></span>
    </div>
  `)
  target.previousElementSibling.querySelector(`.direct-upload__filename`).textContent = file.name
})

addEventListener("direct-upload:start", event => {
  const { id } = event.detail
  const element = document.getElementById(`direct-upload-${id}`)
  element.classList.remove("direct-upload--pending")
})

addEventListener("direct-upload:progress", event => {
  const { id, progress } = event.detail
  const progressElement = document.getElementById(`direct-upload-progress-${id}`)
  progressElement.style.width = `${progress}%`
})

addEventListener("direct-upload:error", event => {
  event.preventDefault()
  const { id, error } = event.detail
  const element = document.getElementById(`direct-upload-${id}`)
  element.classList.add("direct-upload--error")
  element.setAttribute("title", error)
})

addEventListener("direct-upload:end", event => {
  const { id } = event.detail
  const element = document.getElementById(`direct-upload-${id}`)
  element.classList.add("direct-upload--complete")
})



addEventListener("DOMContentLoaded", event => {
  const ele = document.querySelectorAll(".myBtn")
  ele.forEach(element => {
    element.addEventListener("click", ()=>{
      document.querySelector(".image_display").classList.toggle("hide")
    })
  });

  const el = document.querySelectorAll(".fileInput")
  const img = document.querySelectorAll(".image_display")
  el.forEach((ele,i) => {
    ele.addEventListener("input", (eve)=> {
      console.log(eve.target.files.length > 0 )
      eve.target.files.length > 0 ? img[i].classList.add("hide") : img[i].classList.remove("hide")
    })
  })
})
