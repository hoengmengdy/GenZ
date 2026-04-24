const articles = [{
        title: "ឆក់ៗគ្នាពេញភូមិថាបុរសម្នាក់ធ្វើល្អបានអាចម៍",
        img: "https://picsum.photos/400/250?1",
        date: "April 23, 2026"
    },

    {
        title: "ពុទ្ធោអើយ! នារីស្រស់ស្អាតម្នាក់កំពុងផ្ទុះការចាប់អារម្មណ៍",
        img: "https://picsum.photos/400/250?2",
        date: "April 23, 2026"
    },

    {
        title: "ព័ត៌មានថ្មីៗកំពុងល្បីនៅកម្ពុជា",
        img: "https://picsum.photos/400/250?3",
        date: "April 23, 2026"
    },

    {
        title: "ព័ត៌មានពិភពលោកកំពុងត្រូវគេចាប់អារម្មណ៍",
        img: "https://picsum.photos/400/250?4",
        date: "March 20, 2026"
    },

    {
        title: "កម្សាន្តថ្មីៗកំពុងផ្ទុះ",
        img: "https://picsum.photos/400/250?5",
        date: "April 23, 2026"
    },

    {
        title: "សង្គមខ្មែរថ្ងៃនេះមានរឿងជាច្រើនគួរឲ្យតាមដាន",
        img: "https://picsum.photos/400/250?6",
        date: "April 23, 2026"
    }
];


function createCard(item) {
    return `
<div class="card">
<img src="${item.img}">
<div class="content">
<h3>${item.title}</h3>
<div class="meta">
${item.date} • 👁 1K
</div>
</div>
</div>
`;
}

document.getElementById("highlights").innerHTML =
    articles.slice(0, 4).map(createCard).join("");

document.getElementById("latest").innerHTML =
    articles.map(createCard).join("");


document.getElementById("trending").innerHTML =
    articles.slice(0, 5).map((item, index) => `
<div class="trend">
<div class="num">${index+1}</div>
<img src="${item.img}">
<p>${item.title}</p>
</div>
`).join("");



/* Search */
document.querySelector(".search button")
    .addEventListener("click", function() {

        let keyword =
            document.querySelector(".search input")
            .value
            .toLowerCase();

        let filtered =
            articles.filter(a =>
                a.title.toLowerCase().includes(keyword)
            );

        document.getElementById("latest").innerHTML =
            filtered.map(createCard).join("");

        if (filtered.length === 0) {
            document.getElementById("latest").innerHTML =
                "<p>No result found.</p>";
        }

    });