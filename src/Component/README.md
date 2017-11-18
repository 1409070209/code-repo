# 代码地址：
## [轮播图组件](https://github.com/1409070209/code-repo/tree/master/src/Component)
运行截图：
![](images/screenshot_1511006400472.png)
![](images/screenshot_1511006425862.png)


1. 如何覆盖默认样式

        在使用antd组件库的时候有同学经常出现不会覆盖默认样式的情况。明明在全局中重写了css，但是样式确实默认不变的，
        文档也没有过多介绍。在使用这个图片轮播组件的时候将会再次遇到这个棘手的问题，本开发指引将给出通用的解决方案。

        如果您使用的UI库的样式是组件私有的：比如写在了style里，那么这部分样式UI库的开发这认为是必要不可重置的，不能
        以任何方式修改。比如本轮播图组件的left，position，transition等，而antd的Button组件有一个color就是可以修改
        的，如何去 修改呢？

        我们在App跟组件将f12所查看到的类名复制下来重新设置必然是不可能的，因为复制下来的样式，比如.Button{}与组件
        内部引用的.Button{}样式优先级相同，而App组件的样式在webpack打包的时候必然会呗打包在顶部，所以不能起到覆
        盖的作用。我们应该使用.App .Button{}  (其中App是App组件某一个div的class)这样优先级更高，从而实现了目的。


        对与覆盖轮播图的样式方法也是一样的。我贴一个code

        `.Shuffling li{
        	/*这是组件默认的样式*/
            transition: left 0.5s;
            position: absolute;
        }`
        `.App .shuffling li {
           transition: left 0.1s;
        }`

        发现组件轮播速度果然变成了0.1s。从而实现了可配置的修改轮播速度的特点


2. API列表


            children			不可以为null							不解释props

            startOffset				0						默认第一个显示第0个元素
            startZIndex				0						列表的z-index的css属性
            onSlide				空函数				发生change的回调，入参为当前显示元素的下表


3. 与图片懒加载组件共同配合使用开发懒加载模式的图片轮播组件(未开发)


		图片懒加载未开发
