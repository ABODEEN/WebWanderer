const safeWebsites = [
    { name: "Website 1", url: "https://example1.com" },
    { name: "Website 2", url: "https://example2.com" },
    { name: "Website 3", url: "https://example3.com" },
    { name: "Website 4", url: "https://example4.com" },
    // Add more websites to the list
];

const websiteNameElement = document.getElementById("websiteName");
const websiteUrlElement = document.getElementById("websiteUrl");
const suggestButton = document.getElementById("suggestButton");

function suggestSafeWebsite() {
    const randomWebsite = safeWebsites[Math.floor(Math.random() * safeWebsites.length)];
    websiteNameElement.textContent = randomWebsite.name;
    websiteUrlElement.textContent = randomWebsite.url;
    websiteUrlElement.href = randomWebsite.url;
}

suggestButton.addEventListener("click", suggestSafeWebsite);
suggestSafeWebsite();
