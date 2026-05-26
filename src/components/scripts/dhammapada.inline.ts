const registerDhammapada = () => {
  const container = document.getElementById("dhammapada-text") as HTMLElement | null
  if (!container) return

  const endpoint = container.dataset.endpoint
  if (!endpoint) return

  // Don't fetch if already loaded (unless we want it to refresh on every nav)
  if (!container.classList.contains("loading")) return

  fetch(endpoint)
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch verse")
      return res.text()
    })
    .then((text) => {
      container.textContent = text
      container.classList.remove("loading")
    })
    .catch((err) => {
      console.error("Dhammapada error:", err)
      container.textContent = "Could not load verse. Please try again later."
      container.classList.remove("loading")
      container.classList.add("error")
    })
}

document.addEventListener("nav", registerDhammapada)
if (typeof window !== "undefined" && window.addCleanup) {
  window.addCleanup(() => document.removeEventListener("nav", registerDhammapada))
}
