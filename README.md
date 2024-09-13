[![Codacy Badge](https://app.codacy.com/project/badge/Grade/527f12be72bd4015b7b9f01021df29dc)](https://app.codacy.com/gh/Levix0501/next-blog/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Levix0501_next-blog&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Levix0501_next-blog)
[![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

## 准备工作

我们将通过 **Vercel** 和 **Notion** 来快速部署本项目。因此，需要你先注册这两个平台的账号。

- [Vercel](https://vercel.com)：一个用于免费部署前端项目的云平台
- [Notion](https://www.notion.so/)：一个集笔记、任务管理、知识库和协作工具于一体的多功能免费应用

本项目中，我们将把 Notion 作为数据库，并通过其 API 来获取数据。

你可以按照如下步骤创建属于你自己的在线预览网站。

## 一、创建 Notion 数据库

1. 点击此链接查看数据库模板：https://observant-plow-2e3.notion.site/b4903374f38e4ac68923e93045d53c67?v=53460bcbe83f45c4bb0e6334dae54b11

2. 点击页面右上角的“复制”按钮，将模板复制到你自己的账号中

![iShot_2024-09-10_18.09.36](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102032090.png)

3. 打开账号中复制的数据库，点击右上角的 **Copy link**

![iShot_2024-09-10_20.35.25](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102035031.png)

4. 获取数据库 id（**NOTION_DATABASE_ID**），后面会用到，先记录下来。下图链接标红处即为 **NOTION_DATABASE_ID**

![iShot_2024-09-10_20.39.35](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102040453.png)

## 二、创建 Notion 应用

1. 打开链接：https://www.notion.so/my-integrations，新建应用

![iShot_2024-09-10_20.46.11](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102046297.png)

2. 信息自己填完后，点击 "Save"

![iShot_2024-09-10_20.46.36](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102047688.png)

3. 进入应用配置界面

![iShot_2024-09-10_20.49.12](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102049866.png)

4. 获取 **NOTION_TOKEN**，后面会用到，保存下来

![iShot_2024-09-10_20.47.08](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102048405.png)

## 三、部署到 Vercel

点击下方按钮可一键部署到 vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Levix0501/next-blog&env=NOTION_TOKEN,NOTION_DATABASE_ID)

1. 创建仓库

![iShot_2024-09-10_20.57.56](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102058223.png)

2. 将之前保存下来的 **NOTION_TOKEN**、**NOTION_DATABASE_ID**，填入后点击 **Deploy**，等待部署完成即可！

![iShot_2024-09-10_20.50.50](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102052161.png)

3. 完成

![iShot_2024-09-10_21.03.24](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102103938.png)

## 四、管理内容

在 Notion 界面管理内容，网站会同步更新

![iShot_2024-09-10_21.02.15](https://melonvin-1302080640.cos.ap-shanghai.myqcloud.com/img/202409102102225.png)

## 五、注意事项

- 由于 **vercel.app** 国内被墙，所以需要科学上网才能通过 vercel 的域名访问你的网站，可以通过绑定自己的域名解决
