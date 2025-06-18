let livros = new Map();
livros.set('A Arte da Guerra', 'Sun Tzu');
livros.set('O Ladrão de Raios', 'Rick Riordan');
livros.set('O Mágico de Oz', 'L. Frank Baum');

console.log(livros.get('O Ladrão de Raios'));

for(let [chave, valor] of livros) {
    console.log(`${chave}: ${valor}`);
}

livros.delete('O Ladrão de Raios');
console.log(livros.size);

if(livros.has('O Ladrão de Raios')) {
    console.log('Livro encontrado!');
} else {
    console.log('Livro não encontrado.');
}

let student = new Map();
student.set('Name', 'Jhonatan');
student.set('Age', 22);
student.set('personalPhrase', function() {
    console.log('Prefiro morrer do que perder a vida.');
});

console.log(student);
student.get('personalPhrase')();