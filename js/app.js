import UploadImage from '../components/upload-image.vue'

var app = new Vue({
	el: '#app',
	components: {
		UploadImage,
	},
	data () {
		return {
			urlImage: './images/rabiloo.png',
		}
	}
});