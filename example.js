const book = {
    title: 'Lord of the Rings',
    author: 'Talkien',
    isForKids: false,
    characters: ['Aragorn','Legolas','Frodo','Ghimli']
}

//console.log(book.characters);

// const title = book.title
// const author = book.author
// const isForKids = book.isForKids
// const characters = book.characters

//console.log(title,author,isForKids,characters);

const {title: newTitle, author, isForKids, characters} = book

//console.log(title)
console.log("NewTitle ", newTitle)
console.log("Author ", author)
console.log("Is For Kids ", isForKids)
console.log("Characters ", characters)




