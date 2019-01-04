# 基于微信的大学生宿舍报修平台 (College student dormitory repair platform)
## 2019届计算机科学与技术的毕业设计
## 是尝试使用多种工具进行编程开发的一个微型项目

## 作者:UserLeeZJ

##  第一步, 使用git 管理代码
#### git init
#### git add README.md
#### git commit -m "测试提交0001" 

##  第二步, 在github上创建repository ,在本地环境配置repository地址
#### git remote add origin https://github.com/UserLeeZJ/CSdormitoryRepairPlatform..git
#### git push -u origin master  // 本地向repository提交代码

##  第三步, 总体设计
### 设计思路:
#### 报修平台只有一个功能,就是反馈给学校相应人员学生宿舍出现待维修的详细情况.
#### 微信宿舍报修平台面向大学生群体.所以用户是学生student.
#### 学生一般拥有学号,以本人就读学校为例,学号为两个英文字母+入学年份后两位+学制+专业录取名次 共8位
#### 但是不同大学学号编码并不统一,而且,不同学校宿舍的设施并不完全相同.
#### 考虑到开发时间,所以其实是面向本校学生的开发.
#### 报修信息定义 报修编号,报修学生,报修内容,报修位置,报修时间 rnum sid rcontent rplace rtime
#### 用户(学生)定义 学号,姓名,手机,寝室  sid  sname  sphone  sbedchamber
## 第四步, 选用工具
### 微信上能实现拓展功能的有公众号和小程序.平台选用小程序作为前台显示
### express 作为后端框架,mysql 作为数据库存储
