// Loads footer.html into any page with <div id="site-footer"></div>
// Requires the site to be served over http(s) — won't work opening files
// directly as file:// due to browser CORS restrictions on fetch().
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  fetch("footer.html")
    .then((res) => {
      if (!res.ok) throw new Error("Could not load footer.html (" + res.status + ")");
      return res.text();
    })
    .then((html) => {
      mount.outerHTML = html;
    })
    .catch((err) => {
      console.error(err);
      mount.innerHTML = "<p style='padding:24px;color:#EDE6D6;'>Footer failed to load.</p>";
    });
});