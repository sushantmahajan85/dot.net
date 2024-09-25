let PROJECT_ID = "76z3ff72";
let DATASET_NAME = "production";
let QUERY =
  encodeURIComponent(`*[_type == "blog"] | order(_createdAt desc)[0...4]{
        title,
        slug,
        titleImage{
          asset->{
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        smallDescription,
        metaTitle,
        content[]{
    _type == "block" => {
      "text": children[ _type == "span" ].text
    }
  },
        metaDescription,
        _createdAt}`);

let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`;

fetch(URL)
  .then((response) => response.json())
  .then(({ result }) => {
    const blogSection = document.getElementById("blogSection");
    console.log(blogSection, "123124");
    console.log("result: ", result);
    const container = document.createElement("div");
    container.className = "container";

    // Add title and description
    const headerHTML = `
      <div class="blog-header">
        <h2>Latest from our blog</h2>
        <p>Explore the latest insights and trends shaping the future of Web3 and blockchain technology. Stay informed with expert analysis and in-depth articles on decentralized innovations.</p>
      </div>
    `;
    container.innerHTML = headerHTML;

    // Create blog grid
    const blogGrid = document.createElement("div");
    blogGrid.className = "blog-grid";

    result.forEach((post) => {
      const formattedDate = new Date(post._createdAt).toLocaleDateString(
        "en-GB"
      );
      const blogHTML = `
        <div class="blog-card">
          <img src="${post.titleImage?.asset?.url}" alt="${
        post.titleImage?.alt || "Blog Image"
      }" class="blog-image" />
          <div class="blog-info">
            <div class="blog-meta">
              <span class="blog-category">${post.content[0].text}</span>
              <span class="blog-date">${formattedDate}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-description">${post.smallDescription}</p>
            <a href="https://kreativetech.in/blog/${
              post.slug.current
            }" target="_blank" class="read-more">Read more</a>
          </div>
        </div>
      `;
      blogGrid.innerHTML += blogHTML;
    });

    container.appendChild(blogGrid);
    blogSection.appendChild(container);
  });
