function navigateToAnalysis() {
    const select = document.getElementById("searchSelect");
    const value = select.value;
    if (value) {
        window.location.href = value;
    }
}