let approveBtn = document.getElementById("approveBtn");
let cancelBtn = document.getElementById("cancelBtn");

function clickApprove(e) {
  e.preventDefault();

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: function () {
        const approveMessages = [
          "looks good",
          "I think we should merge this",
          "this is looking great to me!",
          "looks good to me overall",
          "We'll get this merged",
          "This change LGTM",
          "This looks good",
          "This looks good to me!",
          "Cool, let's go for it",
          "LGTM (Looks Good To Me)",
          "Code looks solid",
          "Ship it!",
          "great work!",
          "Approved, well done!",
          "Ready to merge, thanks!",
          "Thumbs up for a job well done!",
          "Reviewed and approved, go ahead and merge.",
          "This is good to go.",
          "Code is clean and functional, approved!",
          "Let's merge this, good job!",
          "Ship it!",
          "No issues found, approving for merge.",
          "Looks good on my end!",
          "+solid changes, go ahead and merge.",
          "Approved with minor suggestions, feel free to address them.",
          "Good to merge, thanks.",
          "Ready to ship, go ahead and merge when ready.",
          "All good, ship it!",
          "Approved, nice improvements!",
          "LGTM, merge it!",
          "Well done, approving for merge.",
          "Code looks great!",
          "Ready to merge after the tests are over.",
          "Solid changes, approved",
          "Ready for merge, no issues found.",
          "LGTM, merging after CI passes.",
          // New additions:
          "Nice work on this one!",
          "Clean implementation, approved!",
          "Everything checks out, let's merge",
          "Good stuff, ready to go",
          "This addresses the issue well",
          "Approved! Thanks for the fix",
          "Looking sharp, let's ship it",
          "No blockers here, good to merge",
          "Excellent changes, approved",
          "Ready when you are!",
          "This will work nicely",
          "Perfect, let's get this in",
          "Looks great, merge away!",
          "All set, good to merge",
          "Nice solution!",
          "Works for me, approved",
          "Clean and effective, LGTM",
          "I'm happy with this",
          "Approved, great job!",
          "Let's get this merged",
          "Good implementation",
          "This is solid work",
          "Looks perfect to me",
          "Ready to go live!",
          "Approved without hesitation",
          "Checks all the boxes, approved",
          "This is exactly what we need",
          "Great contribution!",
          "Merge at will!",
          "Looking good, ship it when ready",
        ];

        // getting user name
        const userName = document.querySelector(
          'a[aria-keyshortcuts="Alt+ArrowUp"]',
        ).innerText;

        // open "Finish your review" modal
        document
          .querySelector('button[data-size="small"][data-variant="primary"]')
          .click();

        setTimeout(() => {
          // click Approve radio button
          document.querySelector('input[value="approve"]').click();

          let textDescription = document.querySelector(
            'textarea[placeholder="Leave a comment"]',
          );

          let msg =
            approveMessages[Math.floor(Math.random() * approveMessages.length)];

          textDescription.value = `@${userName} ${msg} :+1:`;
          textDescription.focus();
        }, 1000);
      },
    });
  });
}

function clickCancel(e) {
  e.preventDefault();

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: function () {
        let declineMessages = [
          "This looks good! I've left a few comments that should be addressed before this gets merged ",
          "I left some comments about changes we need",
          "looks good, just a few suggestions",
          "Appreciate your effort, but some aspects need more refinement.",
          "This PR needs to follow our coding standards more closely.",
          "This change needs to align with our overall architecture.",
          "Please address the comments in the PR before we can proceed.",
          "Kindly resolve the comments left on the PR for approval.",
          "Once the comments are addressed, we can merge this PR.",
          "Please take care of the PR comments first.",
          "The PR will be ready to merge after the comments are resolved.",
          "Ensure all PR comments are addressed for approval.",
          "Please finalize the comments in the PR.",
          "Address the feedback in the PR for it to be merged.",
          "Resolve the PR comments to proceed.",
          "Complete the comments in the PR before merging.",
          "Please finish addressing the comments in the PR.",
          "The PR is pending until all comments are resolved.",
          "Ensure comments are addressed before we can merge.",
          "PR comments need to be resolved first.",
          "Complete the requested changes in the comments for approval.",
          "Address the remaining comments to proceed with the PR.",
          "The PR can be merged after comments are handled.",
          "Finish the comment resolutions for the PR to be approved.",
          "Please resolve the outstanding comments in the PR.",
          "Once comments are addressed, we can move forward with this PR.",
          // New additions:
          "Good start, but there are a few things to address first",
          "Almost there! Just need some minor adjustments",
          "I've left some feedback that needs attention",
          "Please review my comments before we proceed",
          "A few changes are needed before this can be merged",
          "Good work overall, but see my comments for needed changes",
          "There are some issues that need to be resolved first",
          "Please make the requested changes and update the PR",
          "Looking forward to the next iteration with these changes",
          "Some adjustments needed - check the review comments",
          "Not quite ready yet, please address the feedback",
          "I've noted some concerns that should be addressed",
          "Let's get these comments resolved and we can merge",
          "A few blockers in the comments that need fixing",
          "Please update based on the review feedback",
          "Some revisions needed before approval",
          "Check out my comments and let's iterate on this",
          "A couple of things to fix before moving forward",
          "Please take a look at the requested changes",
          "Needs some work - see comments for details",
          "Review the feedback and update accordingly",
          "A few items to address before we can proceed",
          "Please incorporate the suggested changes",
          "Some modifications required - detailed in comments",
          "Let's address these points before merging",
          "Requesting changes - see inline comments",
          "A few tweaks needed based on my review",
          "Please revise per the comments left",
          "Some improvements needed before approval",
          "Check the review notes and update please",
        ];

        // getting user name
        const userName = document.querySelector(
          'a[aria-keyshortcuts="Alt+ArrowUp"]',
        ).innerText;

        // open "Finish your review" modal
        document
          .querySelector('button[data-size="small"][data-variant="primary"]')
          .click();

        setTimeout(() => {
          // click Approve radio button
          document.querySelector('input[value="request changes"]').click();

          let textDescription = document.querySelector(
            'textarea[placeholder="Leave a comment"]',
          );

          let msg =
            declineMessages[Math.floor(Math.random() * declineMessages.length)];

          textDescription.value = `@${userName} ${msg}`;
          textDescription.focus();
        }, 1000);
      },
    });
  });
}

approveBtn.addEventListener("click", clickApprove);
cancelBtn.addEventListener("click", clickCancel);
