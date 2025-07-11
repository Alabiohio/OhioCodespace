const runBtn = document.querySelectorAll(".run-btn");
    runBtn.forEach(runBtn => {
        if (runBtn) {
            runBtn.addEventListener('click', () => {
                const codeBox = runBtn.closest(".codeBox");
                const codes = codeBox.querySelector('.language-html');
                const rawHtml = codes.textContent;
                const previewFrame = codeBox.querySelector(".tipPreview");
                previewFrame.srcdoc = rawHtml;
                previewFrame.classList.toggle("show");
                if (previewFrame.classList.contains("show")) {
                    runBtn.textContent = 'Close';
                    runBtn.setAttribute('aria-label', 'Close');
                } else {
                    runBtn.textContent = "Run";
                    runBtn.setAttribute('aria-label', 'Run code');''
                }
            });
        }
    });
    

const codeBox = document.querySelectorAll(".codeBox");

    
codeBox.forEach(codeBox => {
    const copy = document.createElement("button");
    copy.classList.add("copy-btn");
    copy.setAttribute('aria-label', 'copy code');
    copy.innerHTML = `<i class="fa fa-copy"></i>`;
    codeBox.appendChild(copy);
});

const copyBtn = document.querySelectorAll(".copy-btn");

    copyBtn.forEach(copyBtn => {
        copyBtn.addEventListener("click", 		() => {
            const codeBox = copyBtn.closest(".codeBox");
            const codes = codeBox.querySelector('.language-html');
            const rawHtml = codes.textContent;
            navigator.clipboard.writeText(rawHtml).then(() => {
                copyBtn.innerHTML = `<i class="fa fa-check"></i>`;
                setTimeout( () => {
                    copyBtn.innerHTML = `<i class="fa fa-copy"></i>`;
                }, 3000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
            
        });
    });

