---
title: 戴尔燃7000黑苹果EFI
date: 2017-12-03 19:42:54
tags: hackintosh
categories: 教程
cover_img:
feature_img:
---

简单说下我的电脑配置：
CPU: i5-7200u
显卡: HD620 / 940MX
RAM: 2x4G DDR4 2400MHz (但是这个U只支持2133MHz，不过也是可以了)
硬盘: SATA3 500g 机械硬盘 / M.2 SATA3 128g SSD
声卡: ALC 3246
网卡: DW 1830（原本是一张牙膏厂的垃圾卡，就更换了黑果能驱动的卡）

在买这台电脑之前就听说过 hackintosh，也就是黑苹果。但是都没有尝试过，因为一般的笔记本黑起来麻烦多多，很难做到“可用”状态，而这台电脑不仅有两个内存插槽、一个M.2接口（不支持nvme）、一个SATA3接口，还有一个可更换的网卡，很适合用来黑。

这是我第一次动手装黑果，所以首先大量的看帖，各种逛[远景论坛](http://bbs.pcbeta.com/forum.php?gid=86)，在各种爬楼之后，心里终于有点底了，然后感谢同机型的@设为主页，他应该是第一个在这台机子装上的人，他贡献了最初版的EFI。我花了一个下午终于装上😀，其实感觉不是难装，是出现问题的时候不知道怎么解决，还好我没遇到太多问题。

后来各种找驱动，学习了很多东西，就自己尝试配置EFI，很简单的就配置出了这个EFI。其他机型，配置相同或者大致相同的同学可以尝试使用这个EFI。

## 说明

此合集适用于戴尔燃7000系列型号为7460/7560的笔记本电脑
EFI可直接用于安装和日常使用

项目地址：[https://github.com/xzhih/dell-7460-7560-hackintosh](https://github.com/xzhih/dell-7460-7560-hackintosh)

SSDT hotpatch来自[RehabMan](https://github.com/RehabMan/OS-X-Clover-Laptop-Config) 

文件列表：

1. EFI (必须)
2. 一键开启HIDPI并注入EDID (可选)
3. 网卡驱动 (可选)
4. 黑果小兵的ALCPlugFix (详细说明[来源传送门](https://github.com/daliansky/ALCPlugFix/blob/master/README.md))

## 使用方法

**1. EFI**

安装时：使用transmac写入镜像至U盘后，拷贝EFI到U盘ESP分区中，重启按F12选择U盘启动即可开始安装

日常使用：安装好系统后，使用 `clover configurator` 挂载MacOS所在硬盘的ESP分区，把EFI拷贝进去，重启按F2进入BIOS设置此引导为首选，保存重启即可

**2. 一键开启HIDPI并注入EDID**

此一键命令可开启接近原生的HIDPI设置，不需要RDM软件即可在系统显示器设置中设置

双击安装命令即可进入设置，可选择安装或卸载

效果：

![设置.png](https://i.loli.net/2017/10/26/59f199e85deb7.png)

**3. 网卡驱动**

机器自带的无线网卡无法驱动，只能购买可驱动的网卡更换，推荐购买 `dw1560/dw1830` 这两款网卡，需要注意的是燃系列有个超燃版也就是没有独显的版本，它因为主板结构不同不能安装dw1830，另外dw1830是3天线网卡，在购买时可向商家索要一根 `7~15cm` 的天线，安装时将第三根天线放置在HDD下的开槽处防止金属屏蔽信号

文件夹内有两个网卡的驱动，自行将里面的驱动拷贝到 `EFI/clover/kext/other` 中

## 其他说明

触摸板手势

**1. 先在设置->键盘->修饰键里设置恢复到默认**

默认win对应cmd键，alt对应opt键，我习惯这样

**2. 在快捷键里设置以下键位**

![快捷键.png](https://i.loli.net/2017/10/26/59f19a6078345.png)

**3. 触控板驱动+手势：**

```
轻触和双指右键在设置->触控板里设置
三指轻触：打开通知
四指轻触：最小化应用到dock栏
三指向上轻扫：Mission Control
三指向下轻扫：应用程序窗口
三指向左轻扫：切换到下一个space
三指向右轻扫：切换到上一个space
四指向上轻扫：launchpad
四指向下轻扫：显示桌面
```

## Change log

2017-12-9

- 常规更新clover
- 支持13.2

2017-11-24

- 重新制作 SSDT hotpath 

2017-11-13

- 更新 clover 4297
- 更新 黑果小兵的ALCPlugFix
- 更新 HIDPI脚本，之前的版本虽然模糊过渡自然，但是睡眠唤醒闪屏，鱼与熊掌不可兼得
- 适配 MacOS 10.13.2
- Lilu相关常规更新
- 修复iTunes退出问题
- 可能修复了关机亮度保存，开机亮度恢复问题
- SSDT hotpath来自[RehabMan](https://github.com/RehabMan/OS-X-Clover-Laptop-Config) 


