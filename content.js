// Function to modify a single thumbnail (make it black and white and blurred)
function modifyThumbnail(thumbnail) {
  thumbnail.style.filter = "grayscale(100%) blur(10px)";
}

// Function to modify all thumbnails on the page
function modifyThumbnails() {
  const thumbnails = document.querySelectorAll("#thumbnail");
  ``;
  thumbnails.forEach((thumbnail) => {
    modifyThumbnail(thumbnail);
  });
}

// Function to remove the YouTube Shorts icon and label
function removeShortsElements() {
  const shortsButton = document.querySelector(
    'a#endpoint.yt-simple-endpoint.style-scope.ytd-guide-entry-renderer[title="Shorts"]'
  );
  if (shortsButton) {
    shortsButton.remove();
  } else {
    console.log("Shorts icon not found");
  }
}

// Function to remove the red dot for channels with line-end-style="dot"
function removeRedDots() {
  const guideEntries = document.querySelectorAll(
    'ytd-guide-entry-renderer[line-end-style="dot"]'
  );
  guideEntries.forEach((entry) => {
    const redDot = entry.querySelector("#newness-dot");
    if (redDot) {
      redDot.remove();
    }
  });
}

// Function to remove the badge style ending for channels with line-end-style="badge"
function removeBadgeStyleEnding() {
  const guideEntries = document.querySelectorAll(
    'ytd-guide-entry-renderer[line-end-style="badge"]'
  );
  guideEntries.forEach((entry) => {
    const badge = entry.querySelector(".guide-entry-badge");
    if (badge) {
      badge.remove();
    }
  });
}

// Call all the modification functions initially
modifyThumbnails();
removeShortsElements();
removeRedDots();
removeBadgeStyleEnding();

// Use MutationObserver to monitor changes and apply modifications dynamically
const observer = new MutationObserver(() => {
  modifyThumbnails();
  removeShortsElements();
  removeRedDots();
  removeBadgeStyleEnding();
});

observer.observe(document.body, { childList: true, subtree: true });

function removeShortsSection() {
  const shortsSection = document.querySelector(
    "ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer"
  );

  if (shortsSection) {
    shortsSection.remove();
  } else {
    console.log("Shorts section not found");
  }
}

removeShortsSection();

function watchForShortsSection() {
  const observer = new MutationObserver(() => {
    removeShortsSection();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Call the function to watch for changes and remove shorts section when available
watchForShortsSection();

// Function to remove the target element
function removeYouTubeCommentsSection(targetElement) {
  if (targetElement) {
    targetElement.remove();
    clearInterval(checkInterval); // Stop the interval once the element is removed
  }
}

// Function to check for the target element at regular intervals
function checkForYouTubeCommentsSection() {
  const targetElement = document.querySelector(
    "ytd-comments#comments.style-scope.ytd-watch-flexy"
  );
  removeYouTubeCommentsSection(targetElement);
}

// Check for the target element every 100 milliseconds (adjust the interval as needed)
const checkInterval = setInterval(checkForYouTubeCommentsSection, 100);

removeYouTubeCommentsSection();
checkForYouTubeCommentsSection();

function removeNotificationButtonSection() {
  const notificationButton = document.querySelector(
    "ytd-notification-topbar-button-renderer"
  );

  if (notificationButton) {
    notificationButton.remove();
  } else {
    console.log("Notification button section not found");
  }
}

removeNotificationButtonSection();
