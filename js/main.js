const tagsElemnts = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = '';
        });
        randomSelect();
    }
});

function createTags(input){
    const tags = input.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsElemnts.innerHTML = '';

    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElemnts.appendChild(tagElement);
    });
}

function randomSelect(){
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        selectedTag(randomTag);

        setTimeout(() => {
            unselectedTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            selectedTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function selectedTag(tag){
    tag.classList.add('selected');
}
function unselectedTag(tag){
    tag.classList.remove('selected');
}