```javascript
let prompts = [];

function uploadPrompt() {
    const uploadForm = document.getElementById('uploadForm');
    const newPrompt = uploadForm.elements['newPrompt'].value;
    const category = uploadForm.elements['category'].value;

    if (newPrompt && category) {
        const prompt = {
            id: prompts.length + 1,
            content: newPrompt,
            category: category,
            dateUploaded: new Date()
        };

        prompts.push(prompt);
        document.getElementById('uploadSuccess').style.display = 'block';
    } else {
        document.getElementById('uploadFailure').style.display = 'block';
    }

    uploadForm.reset();
}

function searchPrompts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const results = prompts.filter(prompt => prompt.content.toLowerCase().includes(searchInput));

    if (results.length > 0) {
        displayPrompts(results);
    } else {
        document.getElementById('searchNoResults').style.display = 'block';
    }
}

function categorizePrompt() {
    const categoryList = document.getElementById('categoryList').value;
    const categorizedPrompts = prompts.filter(prompt => prompt.category === categoryList);

    if (categorizedPrompts.length > 0) {
        displayPrompts(categorizedPrompts);
    }
}

function displayPrompts(promptsToDisplay) {
    const promptContainer = document.getElementById('promptContainer');
    promptContainer.innerHTML = '';

    promptsToDisplay.forEach(prompt => {
        const promptElement = document.createElement('div');
        promptElement.textContent = prompt.content;
        promptElement.classList.add('prompt');
        promptContainer.appendChild(promptElement);
    });
}

function copyPrompt(promptId) {
    const promptToCopy = prompts.find(prompt => prompt.id === promptId);
    navigator.clipboard.writeText(promptToCopy.content)
        .then(() => {
            document.getElementById('copySuccess').style.display = 'block';
        });
}
```