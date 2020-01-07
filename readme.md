# 学学Vue，到底好用在哪里呢
##### IDE: Huilder X 
### MVVM
model view viewmodel  
viewmodel =>  Vue: 1、 Dom监听  2、 数据绑定

### 计算属性
computed中的函数为什么不需要调用？  
	包含get和set方法，一般只需要使用get方法，返回计算后的数值  
computed和methods的对比  
	computed有缓存，如果多次调用，选择computed方案  
	
### 事件绑定
1. 如果绑定的函数不需要传递参数，那么小括号可以省略  
2. 如果小括号省略了，但需要传递参数，这个时候Vue会将浏览器的event类传入到函数中  
3. 如果同时需要event类和其他参数，可以这样操作，eg: `@click="show(x,y,$event)"`  

### input文本的复用问题
diff算法 会把不互斥的元素进行复用 添加key属性即可解决  

### v-show
当v-show的值为true时，该元素依然存在dom结构中，只是添加了style样式: `dispaly: none`  
其实，相较于v-if，v-show使用频率较少  

### key的作用
总结: 固定数组中每个元素的对应关系，从而更加高效地更新虚拟DOM
key的值是独一无二的，一般是使用后台传来的id值

### Vue中数组哪些方法是响应式的
总结: 改变原数组"样子"的方法，例如`push,pop,shift,unshift,splice,sort,reverse`  
通过索引值改变数组中的元素值不是响应式的,arr[0] = 'newValue'  

### v-model的简单实现
##### 解释: 将view层的表单数据 与 model层的data 双向绑定
`<input type="text" v-model="msg" />`
	==>>	
`<input type="text" :value="msg" @input="msg=$event.target.value" />`

### 基于函数的组件data
让每个创建的组件实例都有单独的data，互不影响  

### 父传子 props 传入一个对象的所有属性
想要将一个对象的所有属性都作为 prop 传入，可以使用不带参数的 v-bind (取代 v-bind:prop-name)。  

### Vue的渲染过程
  template => AST(抽象语法树) => render => Vdom => UI  

### 前端路由 后端路由
  后端渲染: 服务器获取到浏览器发送过来的URL字段，先在后台基于JSP渲染好HTML页面，然后页面直接传给浏览器  
    后端路由的映射关系: URL字段 <--> 页面  
  前端渲染: 网页大部分内容都是由前端JS脚本渲染出来的   
    SPA单页面应用  
    前端路由的映射关系: URL字段 <--> 页面  

### hash & history
  路由模式: mode: 'hash'||'history'  

### 懒加载
  原理: 将打包后的app.js文件进行分离; 每个路由组件作为一个js文件  
  用法: `const Home = () => import('@/components/Home.vue')`

### 参数传递
  `$route.query || params`

### 导航守卫
  概念: 设置路由跳转时的监听
  `router.forEach((to, from, next) => {`
    `next()`
    `document.title = to.matched[0].meta.title`  
  `})`  
      //在每个router设置meta值,动态修改网页title，matched\[0\]解决嵌套问题