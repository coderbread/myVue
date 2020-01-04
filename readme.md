# 学学Vue，到底好用在哪里呢
### MVVM
model view viewmodel
viewmodel Vue: 1、Dom监听  2、数据绑定

### 计算属性
computed中的函数为什么不需要调用？
	包含get和set方法，一般只需要使用get方法，返回计算后的数值
computed和methods的对比
	computed有缓存，如果多次调用，选择computed方案
	
### 事件绑定
1.如果绑定的函数不需要传递参数，那么小括号可以省略
2.如果小括号省略了，但需要传递参数，这个时候Vue会将浏览器的event类传入到函数中
3.如果同时需要event类和其他参数，可以这样操作，eg: `@click="show(x,y,$event)"`

### input文本的复用问题
diff算法 会把不互斥的元素进行复用 添加key属性即可解决

### v-show
当v-show的值为true时，该元素依然存在dom结构中，只是添加了style样式: `dispaly: none`