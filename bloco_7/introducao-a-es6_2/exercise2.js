const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addPropertyInObj = (obj, key, value) => {
  obj[key] = value;
  // console.table(obj);
};

const listObjKeys = (obj) => {
  const objKeys = Object.keys(obj);
  // console.log(objKeys);
};

const returnObjLenght = (obj) => Object.keys(obj).length;

const listObjValues = (obj) => Object.values(obj);

addPropertyInObj(lesson2, 'turno', 'manhã');
listObjKeys(lesson1);
// console.log(returnObjLenght(lesson3));
console.log(listObjValues(lesson3));