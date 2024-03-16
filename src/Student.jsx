import Card from "./Card";
import person1 from './assets/person1.jpg'
import person2 from './assets/person1.jpg'
import person3 from './assets/person1.jpg'
import person4 from './assets/person2.png'
import person5 from './assets/person2.png'
import './index.css'
const students = [
    {id: 14242147, name: "Student 1", image: person1, email:"mm@gmail.com"},
    {id: 15457456, name: "Student 2", image: person2, email:"mmm@gmail.com"},
    {id: 15252525, name: "Student 3", image: person3, email:"mmmm@gmail.com"},
    {id: 12542325, name: "Student 4", image: person4, email:"mmmmm@gmail.com"},
    {id: 10123215, name: "Student 5", image: person5, email:"mmmmmm@gmail.com"},
   
  ];
export default function Student(){
        return(
            <div className="card-container">
                {students.map(student => (
                    <Card key={student.id} student={student} />
                ))}
            </div>
        );
}