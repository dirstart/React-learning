import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

const lessons = [{
	title: 'Lesson 1: title',
	description: 'Lesson 1: description'
}, {
	title: 'Lesson 2: title',
	description: 'Lesson 2: description'
}, {
	title: 'Lesson 3: title',
	description: 'Lesson 3: description'
}, {
	title: 'Lesson 4: title',
	description: 'Lesson 4: description'
}, {
	title: 'Lesson 1: title',
	description: 'Lesson 1: description'
}, {
	title: 'Lesson 2: title',
	description: 'Lesson 2: description'
}, {
	title: 'Lesson 3: title',
	description: 'Lesson 3: description'
}, {
	title: 'Lesson 4: title',
	description: 'Lesson 4: description'
}]

class Lesson extends Component {
	/* TODO */
	Change() {
		console.log(this.props.index + ' - ' + this.props.lesson.title);
	}
	render() {
		const {
			lesson
		} = this.props;
		return ( < div onClick = {
				this.Change.bind(this)
			} >
			<h1> {lesson.title}</h1> < p > {
				lesson.description
			} < /p> < /div > )
	}
}

class LessonsList extends Component {
	/* TODO */
	render() {
		return (<div>
			{
				lessons.map((lesson,i)=><Lesson lesson={lesson} key={i} index={i} />)
			}
		</div>)
	}
}

ReactDOM.render(<LessonsList />, document.getElementById("root"));


console.log(this.props.index + ' - ' + this.props.lesson.title)
console.log(this.props.index, ' - ', this.props.lesson.title)