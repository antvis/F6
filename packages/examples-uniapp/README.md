![uniapp中使用](https://gw.alipayobjects.com/mdn/rms_5c3b4a/afts/img/A*RaRtT6YnGPMAAAAAAAAAAAAAARQnAQ)

# 背景

越来越多的跨平台应用开发会使用中间框架，uni-app 就是其中使用比较多的一款，有很多用户会来咨询如何在 uni-app 中使用，所以这里仅仅是一个示例，用来演示 uni-app 中使用 F6。

# 使用方式

```
<template>
	<view class="content">
		<f6-canvas :width="width" :height="height" :onInit="onCanvasInit" :onTouchEvent="onTouchEvent"></f6-canvas>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import F6Canvas from "../../components/canvas/canvas.vue";
	import F6 from 'f6';

	export default {
		components: {
			"f6-canvas": F6Canvas
		},
		data() {
			return {
				width: 300,
				height: 400,
				pixelRatio: 1,
			}
		},
		onLoad() {

		},
		methods: {
			onTouchEvent(e) {
				this.graph && this.graph.emitEvent(e);
			},
			onCanvasInit({
				ctx,
				rect,
				canvas,
				renderer
			}) {
				console.log('canvas init ready', this, F6, ctx,
					rect,
					canvas,
					renderer
				);
				this.graph = new F6.Graph({
					container: canvas,
					context: ctx,
					renderer,
					width: 300,
					height: 300,
					modes: {
						default: [
							'drag-canvas',
							'zoom-canvas',
						],
					},
				});
				const data = {
					// 点集
					nodes: [{
							id: 'node1', // String，该节点存在则必须，节点的唯一标识
							x: 100, // Number，可选，节点位置的 x 值
							y: 200, // Number，可选，节点位置的 y 值
						},
						{
							id: 'node2', // String，该节点存在则必须，节点的唯一标识
							x: 300, // Number，可选，节点位置的 x 值
							y: 200, // Number，可选，节点位置的 y 值
						},
					],
					// 边集
					edges: [{
						source: 'node1', // String，必须，起始点 id
						target: 'node2', // String，必须，目标点 id
					}, ],
				};
				this.graph.data(data);
				this.graph.render();
				this.graph.fitView();

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

```

# 注意事项

- 本示例仅包含最简单的使用模式，其他模式可以修改 `/pages/index/index.vue` 进行替换即可
- `components` 中的 `const origin = e.mp;` 这句需要注意，本示例完全针对微信，如果要考虑支付宝等平台，需考虑自行封装
- 由于 uniapp 对 npm 支持不是很友好，故 f6 所有文件放在根目录
