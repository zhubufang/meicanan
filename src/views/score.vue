<template>
	<div class="score">
		<cube-scroll-nav :options="scrollOptions" :current="data[0].name" :side="true" v-if="data.length" :data="data"
		 @change="changeHandler" @sticky-change="stickyChangeHandler">
			<cube-scroll-nav-panel v-for="item in data" :key="item.name" :label="item.name" :title="item.name">
				<ul>
					<li v-for="food in item.foods" :key="food.name">
						<div>
							<img :src="food.icon" width="80px" height="80px">
							<p>{{food.name}}</p>
						</div>
					</li>
				</ul>
			</cube-scroll-nav-panel>
		</cube-scroll-nav>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				code: null,
				scrollOptions: {
					click: false,
					directionLockThreshold: 0
				},
				data: [{
					"name": "热销榜",
					"type": -1,
					"foods": [{
							"name": "皮蛋瘦肉粥",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥1",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥2",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥3",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥4",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥5",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
						{
							"name": "皮蛋瘦肉粥6",
							"icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
							"image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
						},
					]
				}, ],
			};
		},
		mounted() {
			// setTimeout(() => {
			// 	this.refresh();
			// }, 20);
			// window.addEventListener("resize", () => {
			// 	console.log(5555);
			// 	alert("resize")
			// 	this.refresh();
			// });
		},
		methods: {
			refresh() {
				this.$refs.scroll.refresh();
			},
			changeHandler(label) {
				console.log('changed to:', label)
			},
			stickyChangeHandler(current) {
				console.log('sticky-change', current)
			},
			scollToInput() {

				this.refresh()
				//alert("focus")
			},
			fixScroll() {
				console.log(3333)
				window.scrollTo(0, scroll);
			},
			getUserInfo() {
				this.$service({
					method: "get",
					url: "/userInfo",
					params: {
						code: this.code
					}
				}).then(res => {
					if (res.code == 0) {}
				});
			}
		}
	};
</script>

<style lang="stylus" scoped>
	
	.score>>>.cube-scroll-nav-panel-title {
		display: none;
	}
	.score {
		height: 100;
		width: 100%;
		overflow: hidden;
		border: 1px solid red;

		.form {
			width: 80%;
			text-align: left;
			margin: 10vh auto 0;

			p {
				line-height: 2;

				span {
					color: red;
					font-size: 16px;
				}
			}

			span {
				font-size: 14px;
				color: gold;
				line-height: 2;
			}

			.cube-input {
				margin-bottom: 20px;
			}
		}
	}
</style>
