alert("hell");

document.addEventListener("DOMContentLoaded", () => {
    // Find the TOC container element.
    // If there isn't one, create one at the start of the document.
    let toc = document.querySelector("#TOC");
    if (!toc) {
        toc = document.createElement("div");
        toc.id = "TOC";
        document.body.prepend(toc);
    }
    // Find all section heading elements. We're assuming here that the
    // document title uses <h1> and that sections within the document are
    // marked with <h2> through <h6>.
    let headings = document.querySelectorAll("h2,h3,h4,h5,h6");
    // Initialize an array that keeps track of section numbers.
    let sectionNumbers = [0, 0, 0, 0, 0];
    // Now loop through the section header elements we found.
    for (let heading of headings) {
        // Skip the heading if it is inside the TOC container.
        if (heading.parentNode === toc) {
            continue;
        }
        // Figure out what level heading it is.
        // Subtract 1 because <h2> is a level-1 heading.
        let level = parseInt(heading.tagName.charAt(1)) - 1;
        // Increment the section number for this heading level
        // and reset all lower heading level numbers to zero.
        sectionNumbers[level - 1]++;
        for (let i = level; i < sectionNumbers.length; i++) {
            sectionNumbers[i] = 0;
        }
        // Now combine section numbers for all heading levels
        // to produce a section number like 2.3.1.
        let sectionNumber = sectionNumbers.slice(0, level).join(".");
        // Add the section number to the section header title.
        // We place the number in a <span> to make it styleable.
        let span = document.createElement("span");
        span.className = "TOCSectNum";
        span.textContent = sectionNumber;
        heading.prepend(span);
        // Wrap the heading in a named anchor so we can link to it.
        let anchor = document.createElement("a");
        let fragmentName = `TOC${sectionNumber}`;
        anchor.name = fragmentName;
        heading.before(anchor); // Insert anchor before heading
        anchor.append(heading); // and move heading inside anchor
        // Now create a link to this section.
        let link = document.createElement("a");
        link.href = `#${fragmentName}`; // Link destination
        // Copy the heading text into the link. This is a safe use of
        // innerHTML because we are not inserting any untrusted strings.
        link.innerHTML = heading.innerHTML;
        // Place the link in a div that is styleable based on the level.
        let entry = document.createElement("div");
        entry.classList.add("TOCEntry", `TOCLevel${level}`);
        entry.append(link);
        // And add the div to the TOC container.
        toc.append(entry);
    }
});