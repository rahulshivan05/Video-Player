window.addEventListener('resize', update);
var x = window.document.getElementById('demo');
update();

function update(){
	x.innerHTML = "Browser inner window width: " + window.innerWidth + ", height: " + window.innerHeight + ".";
}

// var oh = window.outerHeight;
// console.log(oh)

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}, this);
	}
};
video.showTags()


// function Video(title) {
// 	this.title = title;
// 	console.log(this);
// }

// const v = new Video('a');





