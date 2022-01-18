(() => {
  const canvas = document.querySelector("#myCanvas")
  canvas.width = 500
  canvas.height = 500
  
  const ctx = canvas.getContext("2d")

  ctx.strokeStyle = "green"

for (let i = 0; i < Math.random()*250; i++) {
  ctx.strokeRect(Math.random()*250, Math.random()*250, Math.random()*500, Math.random()*500)
} 
})()