这3个文件是 figma Export/Import Variables 生成的文件，我需要转成 tailwind.config.js 和 global.css 文件，放到 output 文件夹中。

不需要详细说明，但是请将以上的任务写成一个 js 脚本，放到 src 里。

---

global.css 里只需要生成 Gradient Palette json 里的颜色作为 css var

不对，只需要 color 不需要 px 

将颜色变量的空格换成 -

处理一下 %

前面有一部搞错了。tailwind 是要处理所有的，global.css 只需要处理 gradient palette 文件。 

不对，tailiwnd 不仅仅处理颜色，还要处理所有的 design token，base