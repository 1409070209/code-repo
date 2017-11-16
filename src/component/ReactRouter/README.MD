**这是一个实现React-Router-dom中Link组件的实现**

在Hash模式下Link组件和a标签有什么区别：
	如果a标签的href前缀为形如“/#”这样的字符串那么没有任何区别，因为HashRouter已经监听了hashchange事件，在这个事件中调用HashRouter子组件的update生命周期，其中子组件如果为Route，那么会有两个props，一个是component，一个是path，如果path匹配，那么rendercomponent，反之render NULL，这也解释了为什么可以在一个URI渲染多个路由，也解释了F12为什么会有那么多的React Empty的HTML注释

在Browser模式下有什么区别：
	区别百度
	因为a标签href前缀不可能为/#，所以区别嘛，就不谈了。但是Link组件却可以不重载页面渲染组件。本Demo就是如何实现Link组件的一个思路。
	如何Browser模式下的Link组件：
		百度popstate事件，window.history.popState()这两个关键字。


    run(e){
        e.preventDefault();
        //至于为什么要写出这么‘脑残’的代码才能实现。。。。。。这个嘛，就不谈了
        window.history.pushState({},'',e.target.href);
        window.history.pushState({},'',e.target.href);
        window.history.back();
    }

