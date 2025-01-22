这3个文件是 figma Export/Import Variables 生成的文件，我需要转成 tailwind.config.js 和 global.css 文件，放到 output 文件夹中。

不需要详细说明，但是请将以上的任务写成一个 js 脚本，放到 src 里。

---

global.css 里只需要生成 Gradient Palette json 里的颜色作为 css var

不对，只需要 color 不需要 px 

将颜色变量的空格换成 -

处理一下 %

前面有一部搞错了。tailwind 是要处理所有的，global.css 只需要处理 gradient palette 文件。 

不对，tailiwnd 不仅仅处理颜色，还要处理所有的 design token，base

---

将 tailwind.config.js 里的颜色换成 global.css 里的 var。

Design token json 里的 dark light mode 怎么没了

处理 global.css 里的 & 符号

在 global.css 和 tailwind config js 后面都添加注释，为 json 中的名字和行号

行号换成 json 文件名和json文件中对应的行号

这行号不对啊。

算了 不要行号了。感觉这个逻辑你算不出来

tailwind config js  中注释不是放到最上面，放到每一个生成的后面

你确定生成注释了吗？现在注释都没了

不是添加注释在 transform.js，是在生成的 tailwind.config.js 里用注释表明是对应的 json 的那一个 name，那个文件。

还是在 tailwind.configjs 没有看到注释。

注释加的地方不对啊

怎么回事，又没有注释了

不是有这么难吗？你理解了我的意思，但是生成的代码没有完成效果。

等一下。我们先忘记刚才做的，重新思考下怎么正确生成 tailiwind.config.js
1. 每个生成的配置的上方，都增加一行注释，表明类似于哪个json文件的那一个 name
2. 如果 JSON.stringify 会忽略到注释，那就换一种不会忽略注释的写法

注释的位置是正确了，但并不是 json 文件和 name 

改完之后，注释又没了。

生成的代码运行错误了 

谢天谢地，你终于生成的对了。但是怎么会有很多多余的 `}` 呢？

生成的 tailwind.config.js 还是有问题。 花括号没对应上。

你终于做对了。至少我现在没看到毛病。
> 纯夸夸竟然还 fix 了 bug

```
是的,终于做对了。主要的改进点是：
使用 isFirstCategory 来正确处理第一个类别和后续类别的花括号和逗号
在每个新类别开始前关闭前一个类别
在最后只添加一个结束花括号来关闭最后一个类别
不过我注意到代码中有一个小问题：main() 被调用了两次。我们应该删除一个：
```

生成的 tailwind.config.js 的 indent 有问题

---

ok。既然注释已经生成对了，请将 margin  width 等其他的也添加注释吧

---

<REVERT> 针对 tailwind.config.js VARIABLE_ALIAS，直接引用最原始的变量
> Cursor 理解错了。这一步只是重构，暂时先这样吧。有了注释也方便很多。

---

TODO
合并 global.css 和 tailwind.config.js。
但是实在吵不动了。先手动合并了。

---


[-] 修改 transform.js 的逻辑，如果有 VARIABLE_ALIAS，不需要新增一个css var，直接使用 alias 对应的变量（就在 Gradient Palette 里）,tailwind config 里也是引用 alias 的 css var。

[-] 继续修改，tailwind 里的值也改成 alias 的。

[-] 这里要区分暗色模式吗？只要有别名，都直接用别名的 css var

[-] 我们重新思考下。现在的结果是 DEFAULT 或者 dark 对应的 css var 已经在 global.css 不存在了（不再生成），需要改成 alias，即 --color-text-critical-default 变成了 --color-red-40, --color-text-critical-default-dark 变成了--color-red-50。按照这个思路修改 transform.js

[-] extractColorConfig 这个方法也没被调用啊

[-] nameParts.join is not a function

先删除没有使用到的代码

还有逻辑没有被调用

> 让他删除逻辑，他竟然还重构了。但是重构的逻辑有问题。决定手动删除了。

reset 重新做 [-] 总结成一条指令

修改 transform.js 的逻辑：当遇到 VARIABLE_ALIAS 类型的变量时，不要生成新的 CSS 变量，而是：
在 global.css 中：
1. 不生成如 --color-text-critical-default 这样的变量
2. 只保留基础调色板中的变量（如 --color-red-40）

在 tailwind.config.js 中：
1. 将引用直接指向别名对应的变量
2. 例如："critical/default" 应该直接引用 "var(--color-red-40)"

这样可以简化变量系统，避免重复定义，直接使用基础调色板中的变量。

---

 "sky blue/700": { 生成的不要带空格

 