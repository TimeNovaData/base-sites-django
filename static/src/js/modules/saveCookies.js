export default function (functions) {
	const container = document.querySelector(".cookies-container");
	const save = document.querySelector(".cookies-save");

	if (!container || !save) return null;

	const localPref = JSON.parse(window.localStorage.getItem("cookies-pref"));

	if (localPref) activateFunctions(localPref);

	function getFormPref() {
		return [...document.querySelectorAll("[data-function]")]
			.filter((el) => el.checked)
			.map((el) => el.getAttribute("data-function"));
	}

	function activateFunctions(pref) {
		pref.forEach((f) => functions[f]());
		container.style.display = "none";
		window.localStorage.setItem("cookies-pref", JSON.stringify(pref));
	}

	function handleSave() {
		console.log("test");
		const pref = getFormPref();

		activateFunctions(pref);
	}

	save.addEventListener("click", handleSave);
}
