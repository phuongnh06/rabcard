<template>
	<div style="text-align: center; width: 100%">
		<div class="contain-image ib">
			<input type="text" v-model="name">
			<select v-model="departure">
				<option v-for="dp in listDeparture" :value="dp"> {{ dp }} </option>
			</select>
			<div id="image-container">
				<div v-if="imageUrl.length > 0 ? true : false" class="previewImage">
					<img id="drag-image" :src="imageUrl" />
				</div>
			</div>
			<div>
				<input type="file" @change="loadUserImage" accept="image/*">
				<button @click="exportCanvas" class="getLink">Get image</button>
				<div v-if="downloadUrl.length > 0 ? true : false">
					<a id="save" :href="downloadUrl" target="_blank" :download="downloadName">Download</a>
				</div>
				<button type="button" onmousedown="zoomIn()" onmouseup="clearZoom()" class="zoomin">+</button>
				<button type="button" onmousedown="zoomOut()" onmouseup="clearZoom()" class="zoomout">-</button>
			</div>
		</div>
		<canvas ref="canvas" id="canvas" width="614" height="949" style="display: none"></canvas>
	</div>
</template>

<script>
	export default {
		props: {
			image: {
				type: String,
			},
		},
		data () {
			return {
				name: '',
				departure: '',
				listDeparture: [
					'Bưng bê rót nước',
					'Tưới cây',
					'Design',
					'Marketing',
					'Web developer',
					'R&D',
					'CEO',
					'CTO',
					'UFO',
				],
				imageUrl: '',
				downloadUrl: '',
				downloadName: '',
				canvas: '',
				userImageLoader: '',
				bgImageLoader: '',
			}
		},
		methods: {
			async exportCanvas() {
				this.canvas = this.$refs.canvas;

				await this.setUserImage(this.imageUrl);
				await this.setBackGroundImage(this.image, this.name, this.departure);
				await this.setName();
				await this.setDeparture();
				
				this.downloadUrl = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
			},
			loadUserImage(e) {
				const file = e.target.files[0];
				if (file) {
					const imageUrl = URL.createObjectURL(file);
					this.imageUrl = imageUrl;
				}
			},
			async setUserImage(img) {
				const ctx = this.canvas.getContext("2d");
				
				this.userImageLoader = new Image();
				this.userImageLoader.src = img;
				
				const p = new Promise((resolve, reject) => {
					this.userImageLoader.onload = () => {
						const x = $("#drag-image").position();
						const y = $("#drag-image");
						ctx.drawImage(this.userImageLoader, x.left, x.top, y.width(), y.height());
						resolve(true);
					}
					
					this.userImageLoader.onerror = () => {
						reject();
					}
				});
				
				return p;
			},
			async setBackGroundImage(img, name, dp) {
				const ctx = this.canvas.getContext("2d");
				
				const backgroundImage = new Image();
				backgroundImage.src = img;
				
				const p = new Promise((resolve, reject) => {
					backgroundImage.onload = () => {
						ctx.drawImage(backgroundImage, 0, 0);
						resolve(true);
					}
					
					backgroundImage.onerror = () => {
						reject();
					}
				});
				
				return p;
			},
			setName() {
				let name = this.name || 'image';
				name = name.replace(/\s/gm, "");
				name = name.replace(/\\|\/|\:|\*|\?|\"|\<|\>|\||\./gm, "");
				this.downloadName = name + '.png';

				const ctx = this.canvas.getContext("2d");
				
				ctx.font = "36pt Calibri";
				ctx.fillText(this.name, 260, 692);
			},
			setDeparture() {
				const ctx = this.canvas.getContext("2d");
				
				ctx.font = "36pt Calibri";
				ctx.fillText(this.departure, 260, 740);
			}
		},
	}
</script>
