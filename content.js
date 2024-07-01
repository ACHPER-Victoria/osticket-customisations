window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#header a")?.pathname == "/helpdesk/login.php" && !document.location.href.includes("NOSSO")) {
      document.querySelector("div.sidebar")?.remove();
      document.querySelector("ul#nav")?.children[2]?.remove()
      document.querySelector("ul#nav")?.children[1]?.remove()
      document.querySelector("div#header > div.pull-right").children[1].textContent = "Please wait. Signing in...";
      document.querySelector("div#header > div.pull-right")?.children[0].remove();
      const loginbox = document.getElementById("clientLogin");
      if (loginbox) {
        let h = document.createElement("h1");
        h.append("Please wait. Signing in...");
        loginbox.parentElement.replaceChildren(h)
      }
      document.location.href = "/helpdesk/login.php?do=ext&bk=oauth2.user.p1i1";
    }
});
    