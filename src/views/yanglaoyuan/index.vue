<template>
	<div class="yanglaoyuan flex flex-column">
		<mt-header title="" style="background-color: #2F7364;">
			<router-link to="/" slot="left">
				<mt-button icon="back" style="color:#FFFFFF;">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="header">
			<div class="inner pos-c b-radius flex flex-align-center">
				<img src="../../assets/logo.png" class="storeImg" />
				<div style="margin-left:10px;height:100%;padding:10px 0" class="flex flex-column flex-justify-between flex-item">
					<p>老师饭店</p>
					<p>量化等级:</p>
					<p class="">
						<span style="font-size:14px;">江西省新余市渝水区</span>
					</p>
				</div>
			</div>
		</div>
		

		<div class="fenlei flex flex-column flex-item">
			
			<div style="height: 100%;position: relative;">
				
				<mt-navbar v-model="active">
					<mt-tab-item id="1">洁厨亮灶</mt-tab-item>
					<mt-tab-item id="2">颐养之家信息</mt-tab-item>
					<mt-tab-item id="3">老人信息列表</mt-tab-item>
					<mt-tab-item id="4">菜谱</mt-tab-item>
				</mt-navbar>
				
				<mt-tab-container v-model="active" swipeable class="scroll-c" style="border:1px solid seagreen;">
					<mt-tab-container-item id="1">
						<cube-scroll ref="scroll">
							<mt-cell v-for="n in 20" :key="n" title="tab-container 1"></mt-cell>
						</cube-scroll>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
						<mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: '1',
				active: '1'
			};
		},
		mounted() {
			setTimeout(() => {
				this.refresh();
			}, 20);
		},
		methods: {
			refresh() {
				this.$refs.scroll.refresh();
			}
		}
	};
</script>

<style lang="stylus" scoped>
	@import '~common/stylus/base';

	.active {
		color: #2F7364;
		border-bottom: 2px solid #2F7364;
	}

	.storeImg {
		width: 30vw;
		height: 30vw;
	}
	.scroll-c {
		    bottom: 0;
		    left: 0;
		    position: absolute;
		    top: 46px;
		    width: 100%;
	}
	.yanglaoyuan >>>.mint-tab-container-wrap {
		height :100%;
	}


	.yanglaoyuan {
		width: 100%;
		height:100%;
		color: #fff;

		.header {
			position: relative;
			height: 50vw;
			border-bottom-right-radius: 30%;
			border-bottom-left-radius: 30%;
			background-color: #2F7364;

			.inner {
				position: absolute;
				top: 14vw;
				width: 90%;
				color: #000;
				padding: 10px;
				border: 1px solid #ccc;
				background-color: #ffffff;
			}
		}

		.fenlei {
			border: 1px solid red;
		}
	}
</style>
