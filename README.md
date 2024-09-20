## 本项目完整源码是收费的  接毕业设计和论文

### 作者微信：grapro666 QQ：3642795578 (支持部署调试、支持代做毕设)

### 接javaweb、python、小程序、H5、APP、各种管理系统、单片机、嵌入式等开发

### 选题+开题报告+任务书+程序定制+安装调试+论文+答辩ppt

**博客地址：
[https://blog.csdn.net/2303_76227485/article/details/142380813](https://blog.csdn.net/2303_76227485/article/details/142380813)**

**视频演示：
[https://www.bilibili.com/video/BV1jktoeUEmb/](https://www.bilibili.com/video/BV1jktoeUEmb/)**

**毕业设计所有选题地址：
[https://github.com/ynwynw/allProject](https://github.com/ynwynw/allProject)**

## 基于Java+Springboot+vue的智能家具管理系统(源代码+数据库+万字论文)178

## 一、系统介绍
本项目前后端分离(可以改为ssm版本)，分为用户、管理员两种角色
### 1、用户：
- 注册、登录、家居管理、任务管理(可定时开启关闭家居)、个人信息、密码修改

### 2、管理员：
- 家具类型管理、区域管理、家具管理、任务管理、用户管理、个人信息、密码修改

## 二、所用技术

后端技术栈：

- Springboot
- mybatisPlus
- Mysql
- Maven

前端技术栈：

- Vue
- Vue-router
- axios
- elementUi

## 三、环境介绍

基础环境 :IDEA/eclipse, JDK1.8, Mysql5.7及以上, Maven3.6, node14, navicat

所有项目以及源代码本人均调试运行无问题 可支持远程调试运行

## 四、页面截图
论文目录：
![contents](./picture/picture0.png)
![contents](./picture/picture00.png)
![contents](./picture/picture000.png)
### 1、用户：
![contents](./picture/picture1.png)
![contents](./picture/picture2.png)
![contents](./picture/picture3.png)
![contents](./picture/picture4.png)
![contents](./picture/picture5.png)
![contents](./picture/picture6.png)
![contents](./picture/picture7.png)
![contents](./picture/picture8.png)
### 2、管理员：
![contents](./picture/picture9.png)
![contents](./picture/picture10.png)
![contents](./picture/picture11.png)
![contents](./picture/picture12.png)
![contents](./picture/picture13.png)
![contents](./picture/picture14.png)

## 五、浏览地址
后台地址：http://localhost:8081

管理员账户密码：admin/admin

用户账户密码：a1/admin

## 六、部署教程
1. 使用Navicat或者其它工具，在mysql中创建对应名称的数据库，并执行项目的sql文件

2. 使用IDEA/Eclipse导入smartHome项目，若为maven项目请选择maven，等待依赖下载完成

3. 修改application.yml里面的数据库配置,src/main/java/com/SpringbootSchemaApplication.java启动后端项目

4. vscode或idea打开src/main/resources/admin/admin项目

5. 在编译器中打开terminal，执行npm install 依赖下载完成后执行 npm run serve,执行成功后会显示后台访问地址

## 七、亮点
使用线程执行方法,实现项目启动后查询未执行的任务，如果时间到了则执行相关任务
